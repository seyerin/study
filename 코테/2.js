const btn = document.querySelector(".btn");
btn.addEventListener("click", solution);

//1번 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// var str = "MyNameIsYerin";
// var number = 5;
// function solution(my_string, n) {
//   my_string = str;
//   n = number;
//   var answer = my_string.slice(-n);
//   console.log(answer);
//   return answer;
// }

//2번 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// var flags = true;

// function solution(a, b, flag) {
//   var result = 0;
//   flag = flags;
//   a = 5;
//   b = 4;
//   if(flag){
//     result = a + b;
//   }
//   else{
//     result = a - b;
//   }
//   var answer = result;
//   return answer;
// }

//3번 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// function solution(start, end) {
//   start = 3;
//   end = 10;
//   var answer = [];
//   for(let i = start; i <= end; i++){
//     answer.push(i);
//   }
//   console.log(answer);
//   return answer;
// }

//4번 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// function solution(num_list, n) {
//   num_list = [1, 2, 3, 4, 5];
//   n = 8;
//   var answer = 0;
//   if(num_list.indexOf(n) != -1 ){
//     answer = 1;
//   }
//   else{
//     answer = 0;
//   }
//   console.log(answer);
//   return answer;
// }

//5번 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 
//인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// function solution(my_string, index_list) {
//   my_string = "pale";
//   index_list = [1, 0, 0, 2, 3];
//   var letterOfStr = [];
//   var answer = '';
//   for(let i = 0; i < my_string.length; i++){
//     letterOfStr.push(my_string.substring(i, i+1));
//   }
//   for(let j = 0; j < index_list.length; j++){
//     answer = answer + letterOfStr[index_list[j]];
//   }
//   return answer;
// }

//6번 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
//a와 b가 모두 홀수라면 a** + b** 점을 얻습니다.
//a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
//a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
//두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// function solution(a, b) {
//   a = 2;
//   b = 6;
//   var answer = 0;
//   if(a % 2 == 1 && b % 2 ==1){
//     answer = (a*a) + (b*b);
//   }
//   else if(a % 2 == 0 && b % 2 ==0){
//     answer = Math.abs(a - b); //abs는 절댓값 구하기 
//   }
//   else{
//     answer = 2 * (a+b); //a % 2 == 1 || b % 2 ==1 라고 조건 절 수도 있음
//   }
//   console.log(answer);
//   return answer;
// }