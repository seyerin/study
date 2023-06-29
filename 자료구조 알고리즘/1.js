function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let lower_1 = str1.toLowerCase();
  let lower_2 = str2.toLowerCase();

  if(lower_1.length !== str2.length){
    console.log(false);
    return false;
  }
  let frequencyCounter1 = {};
  // let frequencyCounter2 = {};

  for(let a of lower_1){
    frequencyCounter1[a] = (frequencyCounter1[a] || 0) +1; // or게이트? || 기준 왼쪽 값이 false라면 오른쪽 값을 출력, 왼쪽 값이 true라면 오른쪽 값을 볼 필요 없이 바로 true값을 출력
  }// 위에 코드를 보면 frequencyCounte1의 값이 false라면 오른쪽 0값을 반환해 +1, frequencyCounte1이 true 라면 0은 무시하고 기존 true값에 +1

  // for(let b of lower_2){
  //   frequencyCounter2[b] = (frequencyCounter2[b] || 0) +1;
  // }
  // console.log(frequencyCounter1);
  
  // for(let key in frequencyCounter1){
  //   if(frequencyCounter1[key] !== frequencyCounter2[key]){
    //     console.log(false);
    //     return false;
    //   }
    // }
    for(let i = 0; i < str2; i++){
      let letter = lower_2[i];
      // console.log(letter);
      if(!(frequencyCounter1[letter])){
        return false;
      }
      else{
        frequencyCounter1[letter] = -1;
      }
      }
      
  console.log(true);
  return true;
}
validAnagram("cat", "ACT");