// 최소직사각형
// 1. 현재 명함의 가로 길이와 세로 길이를
// 2. 최대 가로 길이와 세로 길이를 비교
// 3. 가장 작은 지갑 크기 찾기
function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];
    maxW = Math.max(maxW, Math.min(w, h));
    maxH = Math.max(maxH, Math.max(w, h));
  }

  return maxW * maxH;
}
