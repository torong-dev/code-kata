// 시저 암호
// 1. 공백일 때 공백
// 2. 대소문자 판별
// 3. 밀고난 후 코드 계산
// 4. 밀고난 후의 알파벳 계산
function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      const base = char.toUpperCase() === char ? "A" : "a";
      const code = char.charCodeAt(0) - base.charCodeAt(0);
      const shiftedCode = (code + n) % 26;
      const shiftedChar = String.fromCharCode(base.charCodeAt(0) + shiftedCode);

      return shiftedChar;
    })
    .join("");
}
