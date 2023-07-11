const joinId = document.querySelector(".join-id");
const joinPw = document.querySelector(".join-pw");
const joinRePw = document.querySelector(".join-re-pw");
const joinBtn = document.querySelector(".join-btn");
const checkResult = document.querySelector(".check-result");

const ID = "id";
const PW = "pw";


document.addEventListener("keydown", function(event) {  // -> 기본 엔터 이벤트 삭제
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

function checkEnter(frm, objName){ //-> 인풋 태그 안에 onKeyDown="checkEnter(this.form,this)"넣어주고 옆에 함수 사용하면 앤토 뉴를 때마다 다음 인풋 박스로 이동 
  var keycode = event.keyCode;        
  var i = 0;
  if( keycode == 13 ){
    for( i = 0; i < frm.length - 3; ++i ){
      if( objName == frm[i] ){
        break;
      }
    }
  frm[++i].focus();
  }
}
joinBtn.addEventListener("click", save);
joinRePw.addEventListener("keyup", confirmPw);

function confirmPw(event){
  if(joinPw.value === joinRePw.value && joinRePw.value != ""){  // -> 비밀번호 확인용 인풋 값이 바뀔 때마다 비밀번호 값이랑 비교
    checkResult.innerText = "비밀번호 맞음";
    checkResult.style.color = "blue";
  if(event.keyCode == 13){      // -> 비빌번호와 비밀번호 확인 값이 같고 엔터키를 눌렀을 때 아이디, 비번 저장
      save();
    }
    }
    else if(joinPw.value !== joinRePw.value && joinRePw.value != ""){
      checkResult.innerText = "비밀번호 틀림";
      checkResult.style.color = "red";
    }
}
joinPw.onchange = confirmPw;           
joinRePw.onchange = confirmPw;       // -> 비밀번호, 비밀번호 확인 박스의 값이 바뀔 때마다 함수 실행해서 비밀번호 맞다 틀리다 출력

function save(){
  if(joinPw.value === joinRePw.value && joinRePw.value != ""){  // -> if 한번 더 건 이유는 그냥 회원가입 버튼 눌렀을 때도 비번이랑 확인용 비번 값이 일치하는지 확인용
    localStorage.setItem(ID, joinId.value);
    localStorage.setItem(PW, joinPw.value);
  }
}

const loginId = document.querySelector(".login-id");
const loginPw = document.querySelector(".login-pw");
const loginBtn = document.querySelector(".login-btn");

let saveId = localStorage.getItem(ID);
let savePw = localStorage.getItem(PW);

loginPw.addEventListener("keyup", enterLogin);
loginBtn.addEventListener("click", login);

function enterLogin(event){
  if(event.keyCode == 13){
    login();
  }
}

function login() {
  if(loginId.value === saveId && loginPw.value === savePw && loginId.value != "" && loginPw.value != ""){
    alert("로그인 성공");
  }
  else if(loginId.value !== saveId && loginPw.value !== savePw && loginId.value != "" && loginPw.value != ""){
    alert("아이디, 비번 틀림");
    loginId.value = "";
    loginPw.value = "";
  }
}