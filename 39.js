// GCD: Greatest Common Divisor
// LCM: Least Common Multiple
function solution(n, m) {
  const GCD = (a, b) => {
    let least = Math.min(a, b);
    let GDCNum = 1;

    for (let i = 1; i <= least; i++) {
      if (a % i === 0 && b % i === 0) {
        GDCNum = i;
      }
    }

    return GDCNum;
  };

  const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
  };

  return [GCD(n, m), LCM(n, m)];
}

// 유클리드 호제법
function solution(n, m) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(n, m), lcm(n, m)];
}
