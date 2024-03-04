// 햄버거 만들기
function solution(ingredient) {
  let count = 0;
  // 스택 배열 선언
  let temp = [];

  // ingredient 순회
  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);

    // 최신값부터 4개씩 값 확인
    if (temp.slice(-4).join("") == "1231") {
      count += 1;

      // 1231이 있으면 스택에서 빼기
      temp.splice(-4);
    }
  }

  return count;
}
