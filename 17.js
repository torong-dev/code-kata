// 자연수 뒤집어 배열로 만들기
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함

function solution(n) {
  return String(n).split("").reverse().map(Number);
}
