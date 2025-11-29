import { ellipsisCount, sideCount, totalCount } from "../config/constants";
import { PageArrType } from "../model/pagination";

export function dotPagination(page: number, total_pages: number) {
  const pageArray: PageArrType[] = [];
  const isLeftEllipsis = page - ellipsisCount > 1;
  const isRightEllipsis = page + ellipsisCount < total_pages;
  const moveCnt = totalCount - 2;

  // 둘다 가능
  if (isLeftEllipsis && isRightEllipsis) {
    pageArray.push(1);
    pageArray.push("...");
    for (let i = sideCount; i > 0; i--) pageArray.push(page - i);

    pageArray.push(page);

    for (let i = 1; i <= sideCount; i++) pageArray.push(page + i);
    pageArray.push("...");
    pageArray.push(total_pages);
  } else if (isLeftEllipsis && !isRightEllipsis) {
    pageArray.push(1);
    const tmp = [];

    for (let i = total_pages - moveCnt + 1; i < total_pages; i++) {
      tmp.push(i);
    }
    pageArray.push("...");
    
    for (let i = 0; i < tmp.length; i++) pageArray.push(tmp[i]);
    pageArray.push(total_pages);
  } else if (!isLeftEllipsis && isRightEllipsis) {
    pageArray.push(1);
    for (let i = 2; i < 1 + moveCnt; i++) pageArray.push(i);

    pageArray.push("...");
    pageArray.push(total_pages);
  } else {
    for (let i = 1; i <= total_pages; i++) pageArray.push(i);
  }

  return pageArray;
}
