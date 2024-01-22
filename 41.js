// 이상한 문자 만들기
// 1. 문자열을 공백을 기준으로 만들기
// 2. 짝수번째는 대문자, 홀수번째는 소문자로 각 단어로 처리
// 3. 단어를 문자열로 조합
// 4. 공백을 기준으로 합치기
function solution(s) {
  const words = s.split(" ");
  const answer = words.map((word) => {
    return word
      .split("")
      .map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
  });

  return answer.join(" ");
}
