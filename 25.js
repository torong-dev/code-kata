// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  // 1. arr에서 divisor로 나누어 떨어지는 값을 찾는다.
  let answer = arr.filter((num) => num % divisor === 0);

  // 2. 나누어 떨어지는 element가 없으면 -1을 담아 반환
  // 3. 오름차순 정렬
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
