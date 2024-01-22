// 부족한 금액 계산하기
// 1. 전체 비용 계산
// 2. 전체 비용에서 가진 돈 차감
// 3. 금액이 부족하지 않으면 0을 리턴
function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice > money ? totalPrice - money : 0;
}

// 등차수열의 합
// n(2a + (n - 1)d) / 2
function solution(price, money, count) {
  const totalPrice = (price * count * (count + 1)) / 2;
  return totalPrice > 0 ? totalPrice - money : 0;
}
