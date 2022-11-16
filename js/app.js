let user = JSON.parse(window.localStorage.getItem('USER'));
console.log(user)

function titleName(){
    const userN = user.name + " " + user.surname;
    return userN;
}
const namerer = user.name + " " + user.surname;
//const namer = () => {const userN = user.name + " " + user.surname;
const namer = (text) => {namerer.innerHTML = `<div id="namer">${text}</div>`;}
//return userN.innerHTML;}
namer("a")
window.onload = function () {

        titleName();
        namer("a");
        logo.title = user.name + " " + user.surname;
        
    };

