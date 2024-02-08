// 숫자 짝꿍
function solution(X, Y) {
  const countX = countDigits(X);
  const countY = countDigits(Y);
  let answer = "";

  // 9부터 0까지 역순으로 반복하면서 짝꿍을 찾음
  for (let digit = 9; digit >= 0; digit--) {
    // X와 Y에서 최소 등장 횟수 계산
    const minCount = Math.min(countX[digit] || 0, countY[digit] || 0);
  }

  return answer;
}

// 숫자의 등장 횟수 계산
function countDigits(number) {
  const count = {};
  const strNumber = number.toString();

  // 각 자릿수마다 등장 횟수를 count에 저장
  for (const digit of strNumber) {
    count[digit] = (count[digit] || 0) + 1;
  }

  return count;
}
