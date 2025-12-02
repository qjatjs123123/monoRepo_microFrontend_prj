import axios from "axios";
import type { FinancialParams } from "../model/type.ts";
const crtfc_key = "3c56b5d6c61dcac3b1dc479b57f7176c8d951c8c"; // 환경변수 사용 추천

export async function getRcpNo({
  corp_code,
  bsns_year,
  reprt_code,
  fs_div,
}: FinancialParams) {
  const response = await axios.get(
    "https://opendart.fss.or.kr/api/fnlttSinglAcntAll.json",
    {
      params: {
        crtfc_key,
        corp_code,
        bsns_year,
        reprt_code,
        fs_div,
      },
    }
  );

  const list = response.data.list;

  if (!list || list.length === 0) {
    throw new Error("No financial data found");
  }

  const rcpNo = list[0].rcept_no;
  return rcpNo;
}
