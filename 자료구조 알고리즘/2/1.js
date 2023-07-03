function countUniqueValues(arr){
  if(arr.length === 0){
    return 0;
  }
  let i = 0;
  for(let j = i+1; j < arr.length; j++){
    if(arr[i] != arr[j]){
      i++;
      arr[i] = arr[j];    
    }
  }
  return i+1;
}
countUniqueValues([]);

// function aa(arr, num){
//   if(num > arr.length){
//     return null;
//   }
//   let sum = 0;
//   let max = 0;

//   for(let i = 0; i < num; i++){
//     sum += arr[i];
//   }
//   for(let j = num; j < arr.length; j++){
//     sum = sum - arr[j - num] + arr[j];
//     max = Math.max(sum, max);
//   }
//   console.log(max);
// }
// aa([1,2,3,4,5,6,7,8,9,10], 2);