// 콜라 문제
// 1. 빈 병이 a미만이면 교환 불가능
// 2. 재귀함수 만들기(교환, 남은 콜라병)
function solution(a, b, n) {
  let answer = 0;

  function exchangeColaBottles(emptyColaBottles) {
    if (emptyColaBottles < a) return 0;

    const exchanged = Math.floor(emptyColaBottles / a) * b; // 교환
    const remainingEmptyColaBottles = emptyColaBottles % a; // 남은 콜라병

    return (
      exchanged + exchangeColaBottles(exchanged + remainingEmptyColaBottles) // 교환
    );
  }

  answer = exchangeColaBottles(n); // 재귀함수 호출
  return answer;
}

// 다른 풀이
// n - b: 남은 빈 병의 수
// a - b: 교환으로 소비되는 빈 병의 수
// 전체 콜라 병의 수 반환
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
