console.log("first -- core module");

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second");
  }, 2000);
});

waitingData.then((data) => {
  console.log(data);
  console.log("third");
});

console.log("core module");
