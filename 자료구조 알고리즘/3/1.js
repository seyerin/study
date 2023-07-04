// function sameFrequency(num1, num2){
//   let str1 = num1.toString();
//   let str2 = num2.toString();
  
//   if(str1.length != str2.length){
//     return false;
//   }
//   let numberObject = {};
  
//   for(let i of str1){
//     numberObject[i] = (numberObject[i] || 0) +1;
//   }
//   for(let i = 0; i < str2.length; i++){
//     letter = str2[i];
//     console.log(!(numberObject[letter]), letter);
//       if(!(numberObject[letter])){
//           return false;
//       }
//       else{
//         numberObject[i] = -1;
//       }
//   }
//   console.log(true);
//   return true;
// }

// sameFrequency(34, 43);
//----------------------------------------------------------------------------------------------------------------------1
// function areThereDuplicates(arg1,arg2,arg3,arg4) {
//   // Two pointers
//   args = [];
//   args.push(arg1,arg2,arg3,arg4);
//   args.sort((a,b) => a - b); // sort = 배열 정렬, 기본은 오름차순, 지금도 오름차순
//   console.log(args);

//   let start = 0;
//   let next = 1;
  
//   while(next < args.length){
//     if(args[start] === args[next]){
//       console.log("t");
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }
// areThereDuplicates('a', 'b', 'c', 'a');
//---------------------------------------------------------------------------------2
function averagePair(arr, num){
  let num1 = 0; 
  // let num2 = 1;
  console.log(arr);
  
  
  for(let num2 = num1+1; num2 < arr.length; num2++){
    if(((arr[num1] + arr[num2])/2) != num){
      console.log(num1, num2, (arr[num1] + arr[num2])/2 == num);
      // num1++;
    }
  }
  
  return true;
}

averagePair([1,3,3,5,6,7,10,12,19],8);
//-----------------------------------------------------------------3
// function isSubsequence(str1, str2) {
//   let locationArr = [];
//   let letterArr1 = [];
//   for(let i=0; i < str1.length; i++){
//       letterArr1.push(str1[i]);
//   }
//   let letterArr2 = [];
//   for(let i=0; i < str2.length; i++){
//     letterArr2.push(str2[i]);
//   }
//   for(let i = 0; i < Math.max(letterArr1.length, letterArr2.length); i++){
//     locationArr.push(letterArr2.indexOf(letterArr1[i]));
//   }
//   for(let i = 0; i < locationArr.length; i++){
//     locationArr.splice(locationArr.indexOf(-1), 1);
//     if(locationArr.splice(locationArr.indexOf(-1), 1) == -1){
//       break
//     }
//   }
//   let start = 0; 
//   let next = 1;
//     while(next < locationArr.length){
//       if(locationArr[start] > locationArr[next]){
//       }
//       start++;
//       next++;
//     }
//   return true;
// }
// isSubsequence('sing', 'string');