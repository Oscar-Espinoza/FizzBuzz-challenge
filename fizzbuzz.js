module.exports = function () {
// write your code here
  let arr = [];

  for (let i = 1; i <= 100; i++){
    if(i%3 === 0) {
      if(i%5 === 0) {
        arr.push("FizzBuzz");
        continue;
      } else {
        arr.push("Fizz");
        continue;
      }
    } else if (i%5 === 0) {
      arr.push("Buzz");
      continue;
    } else {
      arr.push(i);
    }
  }
  return arr;

}
