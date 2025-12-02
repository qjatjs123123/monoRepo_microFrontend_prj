export interface FinancialParams {
  corp_code: string; // 8자리
  bsns_year: string; // 4자리
  reprt_code: "11011" | "11012" | "11013" | "11014";
  fs_div: FsDiv;
}

export type FsDiv = "CFS" | "OFS";

export interface TocItem {
  text: string;
  id: string;
  rcpNo: string;
  dcmNo: string;
  eleId: string;
  offset: string;
  length: string;
  dtd: string;
  tocNo: string;
  atocId: string;
  children?: TocItem[];
}