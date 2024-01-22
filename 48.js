// K번째수
// 1. commands 배열에 i, j, k 값 정의
// 2. array 배열을 i번째부터 J번째까지 자르고 정렬
// 3. k번째 숫자 찾기

function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
    return slicedArray[k - 1];
  });
}
