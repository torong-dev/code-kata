// 소수 만들기

// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;

  for (leti = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// 3개의 수를 더했을 때 소수가 되는 경우의 개수
function solution(nums) {
  let answer = 0;
  return answer;
}
