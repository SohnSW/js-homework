const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function getValueFromObject(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else return "Error !";
}

function getValueFromArray(arr, index) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else return "Error !";
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const form = document.querySelector(".login-form");
const inputId = document.querySelector("#userEmail");
const inputPwd = document.querySelector("#userPassword");

function isValidEmail(node, text) {
  if (emailReg(text)) node.classList.remove("is--invalid");
  else node.classList.add("is--invalid");
}

function isValidPwd(node, text) {
  if (pwReg(text)) node.classList.remove("is--invalid");
  else node.classList.add("is--invalid");
}

function handleInput(event, type) {
  const value = event.target.value;
  if (type == "email") {
    isValidEmail(inputId, value);
  } else if (type == "password") {
    isValidPwd(inputPwd, value);
  }
}

inputId.addEventListener("input", (event) => handleInput(event, "email"));
inputPwd.addEventListener("input", (event) => handleInput(event, "password"));

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputId.value == user.id && inputPwd.value == user.pw)
    window.location.href = "welcome.html";
  else alert("입력한 비밀번호가 올바르지 않습니다.");
});
