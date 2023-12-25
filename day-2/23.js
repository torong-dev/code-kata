// 콜라츠 추측
function solution(num) {
  // 3. 500번 반복할 때까지 1이 되지 않으면 -1 반환
  for (let count = 0; count < 500; count++) {
    if (num === 1) {
      return count;
    } else {
      // 삼항연산자
      // 1. 입력된 수 짝수 -> 2로 나눔
      // 2. 입력된 수 홀수 -> 3을 곱하고 1을 더함
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  }
  return -1;
}
