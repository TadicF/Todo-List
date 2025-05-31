export function checkWhiteSpaces(title) {
  let charArr = title.split("");
  console.log(charArr);
  let filteredArr = charArr.filter((char) => char !== ' ');
  let arrWithoutSpaces = filteredArr.join("");
  return arrWithoutSpaces;
}