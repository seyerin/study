const arr = [1, 1, 3, 3, 0, 1, 1]; 
let a = [];

function solution(arr)
{
  for(let i = 0; i < arr.length; i++){
    a.push(arr[i]);
    if(arr[i] == arr[i +1]){
      a.pop();
    }
  }
  
  return a;
}.