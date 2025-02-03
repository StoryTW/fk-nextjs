export function turnoverFormat(number: number) {
  if (number >= 1000000) {
    const res = number / 1000000;
    return Number.isInteger(res) ? res + 'm' : Math.floor(Number(res.toFixed(1))) + 'm';
  } else if (number >= 1000) {
    const result = number / 1000;
    return Number.isInteger(result) ? result + 'k' : Math.floor(Number(result.toFixed(1))) + 'k';
  } else {
    return number.toString();
  }
}
