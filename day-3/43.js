// 크기가 작은 부분문자열
// 1. t문자열에서 길이가 p와 같은 부분문자열을 찾아서 비교
// 2. 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같으면 횟수 증가
function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const subStr = t.substr(i, p.length);
    count += parseInt(subStr) <= parseInt(p) ? 1 : 0;
  }

  return count;
}
