// 소수 만들기

// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;

  for (leti = 2; i * i <= num; i++) {
    // i <= Math.sqrt(n)도 가능
    if (num % i === 0) return false;
  }

  return true;
}

// 3개의 수를 더했을 때 소수가 되는 경우의 개수
function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // 세 수의 합
        const sum = nums[i] + nums[j] + nums[k];

        // 소수체크
        answer += isPrime(sum) ? true : false;
      }
    }
  }

  return answer;
}
