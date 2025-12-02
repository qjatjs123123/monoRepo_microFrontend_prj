import axios from "axios";

export async function getViewerUrl(rcpNo: string) {
  const viewerUrl = `https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${rcpNo}`;

  const response = await axios.get(viewerUrl, {
    headers: { "User-Agent": "Mozilla/5.0" }, // 필수 User-Agent
  });

  if (!response.data) {
    throw new Error("No HTML returned from DART viewer");
  }

  return response.data;
}
