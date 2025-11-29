export type PageArrType = number | "...";

export interface PagiNationProps {
  pageArray: PageArrType[],
  currentPage: number,
  totalPage: number;
}
