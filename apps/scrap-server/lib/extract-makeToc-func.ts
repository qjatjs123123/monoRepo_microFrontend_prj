import * as cheerio from "cheerio";

/**
 * HTML에서 makeToc 함수 문자열 추출
 * @param html DART viewer HTML
 * @returns makeToc 함수 문자열
 */
export function extractMakeToc(htmlStr: string): string {
  if (!htmlStr) throw new Error("HTML must be provided");

  const $ = cheerio.load(htmlStr);
  let makeTocFunc: string | null = null;

  $("script").each((i, el) => {
    const scriptContent = $(el).html();
    if (!scriptContent) return;

    const match = scriptContent.match(/function\s+makeToc\s*\([\s\S]*?\}\s*\}/m);
    if (match) {
      makeTocFunc = match[0];
      return false; 
    }
  });

  if (!makeTocFunc) {
    throw new Error("makeToc function not found in HTML");
  }

  return makeTocFunc;
}
