let sum = 0;
console.time('all');

console.time('loop one');
for (let i = 0; i < 90000000; i++) {
  sum += 1;
}
console.timeEnd('loop one');

console.time('loop two');
for (let i = 0; i < 90000000; i++) {
  sum += 1;
}
console.timeEnd('loop two');

console.time('async process');
asyncFunction()
  .then(() => {
    console.timeEnd('async process');
  });

console.timeEnd('all');

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async process finished');
      resolve();
    }, 3000);
  });
}