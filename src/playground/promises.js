const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved data');
    reject(Error('er is iets mis'));
  }, 5000);
});

console.log('this is the');
promise.then(data => console.log(data)).catch(e => console.log(e));
// promise.then(data => console.log(`2${data}`));
console.log('event loop in action?');
