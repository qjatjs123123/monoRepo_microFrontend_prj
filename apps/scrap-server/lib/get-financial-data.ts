import type { FsDiv, TocItem } from "../model/type.ts";

// 반환 타입 정의
type Type = "재무제표" | "연결재무제표";

interface FinancialStatementResult {
  type: Type;
  original: string;
  cleaned: string;
  item: TocItem;
}

export function findFinancialStatement(
  list: TocItem[],
  target: FsDiv
): FinancialStatementResult | null {
  const type: Type = target === "CFS" ? "연결재무제표" : "재무제표";

  function traverse(node: TocItem): FinancialStatementResult | null {
    if (!node || !node.text) return null;
    const onlyKorean = node.text.replace(/[^가-힣]/g, "");

    // 2) 재무제표 / 연결재무제표 포함 여부 검사
    if (onlyKorean === type) {
      return {
        type: "연결재무제표",
        original: node.text,
        cleaned: onlyKorean,
        item: node,
      };
    }
    if (onlyKorean === type) {
      return {
        type: "재무제표",
        original: node.text,
        cleaned: onlyKorean,
        item: node,
      };
    }

    // 3) children 있으면 재귀 탐색
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        const found = traverse(child);
        if (found) return found;
      }
    }

    return null;
  }

  // 루트 리스트 순회
  for (const item of list) {
    const result = traverse(item);
    if (result) return result;
  }

  return null;
}
