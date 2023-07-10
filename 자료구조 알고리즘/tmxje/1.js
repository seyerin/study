const joinId = document.querySelector(".join-id");
const joinPw = document.querySelector(".join-pw");
const joinRePw = document.querySelector(".join-re-pw");
const joinBtn = document.querySelector(".join-btn");
const checkResult = document.querySelector(".check-result");

const ID = "id";
const PW = "pw";

function checkEnter(form, objName){
  let keycode = event.keyCode;        
  let i = 0
  if( keycode == 13 ){
    for(i = 0; i < form.length; ++i ){
      if( objName.name == form[i].name )
          break;
      }
      form[++i].focus();
  }
}

joinRePw.addEventListener("keyup", confirmPw());

function confirmPw(){
  if(joinPw.value === joinRePw.value && joinRePw.value != ""){
    checkResult.innerText = "비밀번호 맞음";
    checkResult.style.color = "blue";
    
  }
  else if(joinPw.value !== joinRePw.value && joinRePw.value != ""){
    checkResult.innerText = "비밀번호 틀림";
    checkResult.style.color = "red";
  }
  save();
}
joinPw.onchange = confirmPw;
joinRePw.onkeyup = confirmPw;

function save(){
  localStorage.setItem(ID, joinId.value);
  localStorage.setItem(PW, joinPw.value);
}

const loginId = document.querySelector(".login-id");
const loginPw = document.querySelector(".login-pw");
const loginBtn = document.querySelector(".login-btn");

let saveId = localStorage.getItem(ID);
let savePw = localStorage.getItem(PW);

loginBtn.addEventListener("click", () => {
  if(loginId.value === saveId && loginPw.value === savePw){
    alert("로그인 성공");
  }
  else{
    alert("아이디, 비번 틀림");
  }
})