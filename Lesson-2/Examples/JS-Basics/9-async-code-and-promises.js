// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!');
//   }, 1500);
// };

// Callbacks usage

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData(text => {
//     console.log(text);
//     fetchData(text => {
//       console.log(text);
//     });
//   });
// }, 2000);

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 1500);
//   });
//   return promise;
// };

// Promises usage

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//     .then(text => {
//       console.log(text);
//       return fetchData();
//     })
//     .then(text2 => {
//       console.log(text2);
//     });
// }, 2000);

// async/await usage

// setTimeout(async () => {
//   console.log('Timer is done!');
//   let text = await fetchData();
//   console.log(text);

//   let text2 = await fetchData();
//   console.log(text2);
// }, 2000);

setTimeout(() => {
  console.log('Timer is done!');
}, 2000);

console.log('Hello!');
console.log('Hi!');
