// 3진법 뒤집기
// 1. 3진법으로 변환 후 뒤집기
// 2. 3진법을 10진법으로 변환
function solution(n) {
  const base3 = n.toString(3).split("").reverse().join("");
  const base10 = parseInt(base3, 3);

  return base10;
}

// 다른 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
