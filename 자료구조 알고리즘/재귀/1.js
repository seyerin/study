// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(num1, num2){
//   if(num2 === 0){
//     return 1 ;
//   }
//   let result = num1;
//   function helper(helperInput){
//     if(helperInput === 0){
//       return 1;
//     }
//     result = result * num1;
//     helper(helperInput - 1);
//   }
//   helper(num2 - 1);
//   return result;
// }
// power(2, 0);
//-------------------------------------------------------------------1-----------------------------
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// function factorial(num){
//   if(num <= 1){
//     return 1;
//   }
//   if(num < 0){
//     return 0;
//   }
//   return num * factorial(num-1);
// }
// factorial(4);
//----------------------------------------------------------------------------------2
// function productOfArray(arr){
//   if(arr.length === 0){
//     return 1;
//   }
//   let result = 1;
//   function helper(helperInput){
//     if(helperInput.length === 0){
//       return 1;
//     }
//     result = result * helperInput[0];
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }
// productOfArray([1,2,3,10]);

//답안
// function productOfArray(arr) {
//   if(arr.length === 0) {
//       return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }
//---------------------------------------------------------3
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// function recursiveRange(num){
//   if(num === 0){
//     return 0;
//   }
//   return num + recursiveRange(num - 1);
// }
// recursiveRange(6);
//---------------------------------------------------------------------------4
// fib(4) // 3 112358

// function fib(num){
//   let arr = [1, 1];
//   function helper(helperInput){
//     if(helperInput === 1){
//       return 0;
//     }
//     arr.push(arr[num - helperInput] + arr[num - (helperInput - 1)]);
//     helper(helperInput - 1);
//   }
//   helper(num);
//   return arr[num-1];
// }

//답안
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }
// fib(4);