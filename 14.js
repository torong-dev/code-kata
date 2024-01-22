// 약수의 합
function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}

// 다른 풀이
// Array.from() 정적 메서드는 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 인스턴스를 생성함
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환함
// _는 언더스코어로서, 대개의 경우 변수에 값을 할당할 필요가 없을 때 사용됨
// (n % (i + 1) === 0 ? i + 1 : 0)으로 매핑할 때 _는 인덱스 값(i)을 무시하라는 의미

function solution(n) {
  return Array.from({ length: n }, (_, i) =>
    n % (i + 1) === 0 ? i + 1 : 0
  ).reduce((acc, curr) => acc + curr, 0);
}
