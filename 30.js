// 가운데 글자 가져오기
function solution(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  return length % 2 === 0
    ? s.slice(middleIndex - 1, middleIndex + 1)
    : s.charAt(middleIndex);
}
