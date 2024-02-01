// 기사단원의 무기

// 약수 계산
const countDivisors = (n) => {
  let count = 1;

  if (n === 1) return 1;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
};

// 철 무게 계산
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const count = countDivisors(i);
    answer += count > limit ? power : count;
  }

  return answer;
}
