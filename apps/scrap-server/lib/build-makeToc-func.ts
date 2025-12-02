/**
 * HTML에서 추출한 makeToc 함수 문자열을 실제 실행 가능한 함수로 변환
 * @param makeTocFuncStr HTML에서 추출한 makeToc 함수 문자열
 * @returns treeData 반환 결과
 */
export function buildMakeTocFunction(makeTocFuncStr: string): any {
  if (!makeTocFuncStr) {
    throw new Error("makeToc function string must be provided");
  }

  // 불필요한 주석 제거
  let funcStr = makeTocFuncStr.replace(/\/\/js tree[\s\S]*?}\s*$/m, "");
  funcStr = funcStr.replace(/(\s*)}(\s*)$/m, "$1"); // 마지막 중괄호 정리

  // 실제로 실행할 함수 문자열 생성
  const makeTocFunctionStr = `
  function aa() { 
    var cnt; 
    ${funcStr} 
    return treeData 
    } 
  return makeToc(); 
  } 
  return aa() ; `
  const result = new Function(makeTocFunctionStr);

  return result;
}
