function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let lower_1 = str1.toLowerCase();
  let lower_2 = str2.toLowerCase();

  if(lower_1.length !== lower_2.length){
    console.log(false);
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let a of lower_1){
    frequencyCounter1[a] = (frequencyCounter1[a] || 0) +1;
  }
  for(let b of lower_2){
    frequencyCounter2[b] = (frequencyCounter2[b] || 0) +1;
  }
  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);

  for(let key in frequencyCounter1){
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
validAnagram("timeForDinner", "ForDinnerTime");