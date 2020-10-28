function toWord(num) {
  if (num == 0) return "Zero";
  if (num.toString().length > 15) return "too big";
  const lt20 = [
    "",
    "One ",
    "Two ",
    "Three ",
    "Four ",
    "Five ",
    "Six ",
    "Seven ",
    "Eight ",
    "Nine ",
    "Ten ",
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen ",
  ];
  const tens = [
    "",
    "",
    "Twenty ",
    "Thirty ",
    "Forty ",
    "Fifty ",
    "Sixty ",
    "Seventy ",
    "Eighty ",
    "Ninety ",
  ];
  const unit = [
    "",
    "",
    "Hundred ", //10**2
    "Thousand ", //10**3
    "",
    "",
    "Million ", //10**6
    "",
    "",
    "Billion ", //10**9
    "",
    "",
    "Trillion ", //10**12
  ];

  let unit_denote = "",
    word = "",
    num_holder = "",
    unit_index = Math.floor(Math.log10(num));
  while (num > 0) {
    while ((unit_denote = unit[unit_index]) == "" && unit_index > 0)
      unit_index--;

    let divider = Math.pow(10, unit_index);
    let digit = Math.floor(num / divider);
    // console.log(digit, unit_denote);
    //from here, work with digit
    if (digit < 20) {
      num_holder = lt20[digit];
    } else {
      let d3 = Math.floor(digit / 100); //1 0
      // console.log(d3);
      d3 = d3 > 0 ? lt20[d3] + "Hundred " : "";
      let d2 = Math.floor(digit % 100); //23, 23
      d2 = d2 < 20 ? lt20[d2] : tens[Math.floor(d2 / 10)] + lt20[d2 % 10];
      // console.log(d2);
      num_holder = d3 + d2;
    }

    word += num_holder + (num_holder ? unit_denote : "");
    num = num % divider;
    unit_index--;
  }
  return word.slice(0, word.length - 1);
}

console.log(toWord(100000)); //One Hundred Thousand
console.log(toWord(123456789)); //One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine
