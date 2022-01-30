// function sam(){
//   console.log(this);
// }
// const persone = {
//   name:  'Samar',
//   age: 30,
//   job: 'tente odam',
//   callContext: sam,
//   callAnotherContext: sam.bind(this),
//   callInfoJob: function(number){
//     console.group(`name is ${this.name} info:`);
//     console.log(`name is ${this.name}`)
//     console.log(`age is ${this.age}`)
//     console.log(`job is ${this.job}`)
//     console.log(`Contact is ${number}`)
//     console.groupEnd();
//   }
// }


// const frontendDev = {
//   name: 'yusuf',
//   age: 19,
//   job: 'zor odam'
  
// }
// // const fullInfo = persone.callInfoJob.bind(frontendDev, '7465980')();

// persone.callInfoJob.call(frontendDev, '7465980')























// ===========//

// const array = [10, 20, 30, 40, 50];

// function mult(arr, number){
  // return arr.map(function(i){
    // return i * number
  // })
// }

// Array.prototype.logger = function (number){
  // return this.map(function(i){
    // return i * number
  // })
// }
// 
// console.log(array.logger(2))



// console.log(mult(array, 10));


