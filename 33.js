// 약수의 개수와 덧셈
// 삼항 연산자로 더하고 빼는 로직
function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      // 약수 찾기
      if (num % i === 0) {
        count++;
      }
    }
    answer += count % 2 === 0 ? num : -num; // 약수 홀짝 찾기
  }
  return answer;
}

// 제곱근이 정수면 약수의 개수가 홀수다.
function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    const sqrtNum = Math.sqrt(num);
    if (Number.isInteger(sqrtNum)) {
      answer -= num;
    } else {
      answer += num;
    }
  }

  return answer;
}
