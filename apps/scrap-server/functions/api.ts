import express from "express";
import serverless from "serverless-http";

import { getRcpNo } from "../api/get-rcpNo.ts";
import type { FinancialParams } from "../model/type.ts";
import { getViewerUrl } from "../api/get-viewerUrl.ts";
import { extractMakeToc } from "../lib/extract-makeToc-func.ts";
import { buildMakeTocFunction } from "../lib/build-makeToc-func.ts";
import { findFinancialStatement } from "../lib/get-financial-data.ts";

const app = express();
const router = express.Router();

// /api/scrap GET 라우트
router.get("/scrap", async (req, res) => {
  const { corp_code, bsns_year, reprt_code, fs_div } =
    req.query as unknown as FinancialParams;

  try {
    const rcpNo = await getRcpNo({ corp_code, bsns_year, reprt_code, fs_div });
    const htmlStr = await getViewerUrl(rcpNo);

    const makeTocFuncStr = extractMakeToc(htmlStr);
    const makeTocFunc = buildMakeTocFunction(makeTocFuncStr);

    const data = makeTocFunc();
    const financeData = findFinancialStatement(data, fs_div);

    if (!financeData) {
      res.status(404).json({ data: "해당하는 내용이 없습니다." });
    } else {
      res.status(200).json({
        data: `https://dart.fss.or.kr/report/viewer.do?rcpNo=${financeData.item.rcpNo}&dcmNo=${financeData.item.dcmNo}&eleId=${financeData.item.eleId}&offset=${financeData.item.offset}&length=${financeData.item.length}&dtd=${financeData.item.dtd}&displayImage=show`,
      });
    }
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch data from OpenDART API" });
  }
});

// Express 앱에 serverless 경로 연결
app.use("/.netlify/functions/api", router);

// Netlify Functions용 핸들러
export const handler = serverless(app);
