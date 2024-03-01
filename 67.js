// 둘만의 암호
function solution(s, skip, index) {
  let answer = "";
  // skip 문자열의 각 문자를 ASCII 코드로 변환하여 배열로 저장
  const skipCode = skip.split("").map((c) => c.charCodeAt(0));

  // 문자열 s를 각 알파벳에 대한 ASCII 코드로 변환하고 변환된 코드를 배열에 저장
  const converted = s.split("").map((c) => {
    let convert = c.charCodeAt(0);
    for (let i = 0; i < index; i++) {
      convert++;

      // skipCode에 포함된 경우 해당 알파벳 건너뛰기
      while (skipCode.includes(convert)) convert++;

      // 알파벳이 'z'를 넘어간 경우 다시 'a'로 돌아가기
      if (convert == "z".charCodeAt(0) + 1) convert = "a".charCodeAt(0);

      // 건너뛰어야 하는 경우 다시 건너뛰기
      while (skipCode.includes(convert)) convert++;
    }

    return convert;
  });

  // ASCII 코드 배열을 문자열로 변환
  answer = String.fromCharCode(...converted);
  return answer;
}
