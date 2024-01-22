// 숫자 문자열과 영단어
// 1. 숫자에 영단어를 저장
// 2. 숫자인 경우 answer에 추가, 숫자가 아닌 경우 currentWord에 추가
function solution(s) {
  const wordsToNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = "";
  let currentWord = "";

  for (let char of s) {
    if (!isNaN(char)) {
      answer += char;
    } else {
      currentWord += char;
      if (wordsToNumbers.hasOwnProperty(currentWord)) {
        answer += wordsToNumbers[currentWord];
        currentWord = "";
      }
    }
  }

  return parseInt(answer);
}

// 다른 풀이
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}
