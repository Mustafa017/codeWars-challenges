function validateLuhn1(digits) {
  let digitStr = digits.toString().split("");
  let digitRvs = digitStr.reverse();
  let even = [];
  let odd = [];

  for (let i = 1; i < digitRvs.length; i += 2) {
    if (digitRvs[i] < 5) {
      even.push(Number(digitRvs[i]) * 2);
    } else {
      even.push(Number(digitRvs[i]) * 2 - 9);
    }
  }

  for (let i = 0; i < digitRvs.length; i += 2) {
    odd.push(Number(digitRvs[i]));
  }

  //   console.log(even);
  //   console.log(odd);
  const total = odd.concat(even);
  const sum = total.reduce((acc, currentVal) => acc + currentVal);
  //   console.log(sum);
  return sum % 10 === 0 ? true : false;
}
console.log(validateLuhn1([4556372551434601]));
