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
    }
  });
}
