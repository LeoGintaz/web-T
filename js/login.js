const logInInfo = document.querySelector("#log-in");
const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const url = 'https://testapi.io/api/leogintaz/resource/NameReg'

const options = {
    method: 'get',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
}

const response = {};

function isRegistered(){
    fetch(url, options)
    .then((response) => response.json())      

    .then(userData => {
        console.log('userdata' + userData)
        for (const user of userData.data){
            console.log(user)
            if (user.name !== name.value && user.surname !== name.value){
                noLogIn('Vartotojas neegzistuoja')
            }
            
            
            else {
                const accountOBJ = {
                    ID: user.id,
                    name: user.name,
                    surname: user.surname
                }
                console.log(accountOBJ)
                saveToLocalStorage(accountOBJ);
                goToApp();}
        }
    }


    )
    

}

const noLogIn = (text) => {messenger.innerHTML = `<div id="messenger">${text}</div>`;}
const saveToLocalStorage = (obj) => {
    window.localStorage.setItem('USER', JSON.stringify(obj));
};  
    



function back(){
    window.location.href = "index.html";
}

function goToApp(){
    window.location.href = "app.html";
}