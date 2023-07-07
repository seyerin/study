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
//----------------------------------------------------------------------------------------------------------------------3
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
//--------------------------------------------------------------------------------4
// function averagePair(arr, num){
//   let num1 = 0; 
//   let num2 = arr.length -1;
//   console.log(arr);
//   while(num1 < num2){
//     if(((arr[num1]+arr[num2])/2) === num){
//       console.log("t");
//       return true;
//     }
//     else if(((arr[num1]+arr[num2])/2) < num){
//       num1++;
//     }
//     else{
//       num2--;
//     }
//   }

//   return false;
// }

// averagePair([1,3,3,5,6,7,10,12,19],8);
//-----------------------------------------------------------------5
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
//-----------------------------------------------------------------6
// function maxSubarraySum(arr, length){
//   if(arr.length < length){
//     console.log(null);
//     return null;
//   }
//   let sum = 0;
//   let max = 0;
  
//   for(let i = 0; i < length; i++){
//     sum += arr[i]
//   }
//   max = sum;
//   for(let i = length; i < arr.length; i++){
//     sum = (sum + arr[i]) - arr[i-length];
//     max = Math.max(sum, max);
//   }
//   console.log(max);
// }
// maxSubarraySum([2,3], 3);
//------------------------------------------------------------------------7
// function minSubArrayLen (arr, num){
//   for(let i in arr){
//     if(i > num){
//       return i;
//     }
//   }
//   let sum = 0;
//   let time = Infinity;
//   let start = 0;
//   let end = 0;

//   while(start < arr.length){
//     if(sum < num && end < arr.length){
//       sum += arr[end];
//       end++;
//     }
//     else if(sum >= num){
//       time = Math.min(time, end-start);
//       sum -= arr[start];
//       start++;
//     }
//     else{
//       break
//     }
//   }
//   return time === Infinity ? 0:time;
// }
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39);// 10 22 7
//ㄴ> 지린다 이 로직 좋음 생각도 못해본 방법, 39가 됐을 때 배열 길이를 카운트 하고 비교하는게 아니라 
//일단 39이상인 수가 나왔을 때 배열 길이 카운팅 하고 39 이상인 수가 나올 때마다 카운팅 된 배열길이를 비교해서 
//제일 짧은 길이를 구함 그리고 39를 만들기 위해 왔다갔다 하는게 아니라 그냥 계속 쭉쭉 가면서 계산하는게 신기함
//---------------------------------------------------------------------------------------------------------------8
// function findLongestSubstring(str){
  
//   let letterOfObj = {};
//   let length = 0;
//   let start = 0;

//   for(let i = 0; i < str.length; i++){
//     let index = str[i];
//     if(letterOfObj[index]){
//       start = Math.max(start, letterOfObj[index]);
//     }

//     length = Math.max(length, i-start+1);

//     letterOfObj[index] = i+1;

//   }

// }
// findLongestSubstring('thisishowwedoit');
// //'thisishowwedoit'
//개어렵다... 생각조차 못한 방법이라 더 어려움 설마 객체를 쓸까 했는데 객체를 써벌임 근데 쓰는 방식은 또 내가 생각했던 거랑 다름 앞으로 어카냐
//---------------------------------------------------------9