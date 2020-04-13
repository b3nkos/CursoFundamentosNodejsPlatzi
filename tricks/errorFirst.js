function asyncFunction(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 3000);
}

asyncFunction((err, data) => {
  if (err) {
    // throw does not works if the function is wrapper in a try catch
    //this is the reason that the pattern error first callback works in this case
    throw err;
  }

  console.log(`every thing go well, mi data is ${data}`);
});