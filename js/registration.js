const regForm = document.querySelector("#reg-form");
const regFormSubmit = document.querySelector("#reg-form-submit");

function sendData() {
  let data = new FormData(regForm);
  let obj = {};

  data.forEach((value, key) => (obj[key] = value));

  fetch("https://testapi.io/api/leogintaz/resource/NameReg", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  })
    .then(obj => console.log(obj.json()))
    .catch(error => console.log(error));
}

regForm.addEventListener("click", refresh => {
  refresh.preventDefault();
  sendData();
  
});

function back(){
    window.location.href = "index.html";
}

function goToApp(){
    window.location.href = "app.html";
}