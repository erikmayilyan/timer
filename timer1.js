const result = process.argv.slice(2);
const timer = function(numbers) {
  setTimeout(function() {
    console.log(numbers);
  }, 3000);
  for(let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} seconds`)
  }
}
let arr = result.map(function(element) {
  return parseInt(element);
}).sort((a, b) => a - b);
timer(arr);