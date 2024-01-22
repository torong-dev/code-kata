// 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

// 다른 풀이
function solution(arr1, arr2) {
  return arr1.map((row1, i) => row1.map((row2, j) => row2 + arr2[i][j]));
}
