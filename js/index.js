var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var regName = document.getElementById("regName");
var regEmail = document.getElementById("regEmail")
var regPassword = document.getElementById("regPassword")
var reLogin = document.getElementById("reLogin")
var Bbox = []

if (localStorage.getItem("allAccounts")) {
    Bbox = JSON.parse(localStorage.getItem("allAccounts"))
    console.log(localStorage.getItem("allAccounts"))
}
function register() {
    if (validateRegAccount(regName) && validateRegAccount(regEmail) && validateRegAccount(regPassword)) {
        var emailExists = Bbox.some(user => user.rEmail === regEmail.value);
        if (emailExists) {
            alert("exist");
            //   regEmail.nextElementSibling.classList.replace("d-none","d-block")
            //   reLogin.nextElementSibling.innerHTML="Email already exist"
        } else {
            var resgist = {
                rName: regName.value,
                rEmail: regEmail.value,
                rPass: regPassword.value
            }
            Bbox.push(resgist)
            localStorage.setItem("allAccounts", JSON.stringify(Bbox))
            console.log(resgist)
            reLogin.previousElementSibling.classList.replace("d-none", "d-block")
        }
    } else {
        reLogin.previousElementSibling.classList.replace("d-block", "d-none")
    }
}

function validateRegAccount(ele) {
    console.log(ele.id, ele.value)
    var regex = {
        regName: /^[a-zA-z]{3,25}$/,
        regEmail: /^[a-z._]+@[a-zA-z]+\.[a-zA-z]{2,}$/,
        regPassword: /^[A-Za-z\d@$!%*?&]{8,20}$/,

    };
    var isValid = regex[ele.id].test(ele.value);
    if (isValid) {
        console.log("matched")
        ele.nextElementSibling.classList.replace("d-block", "d-none")

    } else {
        console.log("Not matched")
        // ele..replace("d-block","d-none")
        ele.nextElementSibling.classList.replace("d-none", "d-block")
    }
    return isValid;
}
// function login(){
//     if(validateRegAccount(inputEmail)&&validateRegAccount(inputPassword)){
//     alert("hello")
// }
// // const user = users.find(user => user.email === inputEmail && user.password === inputEmail);
// // if (user) {
// //     alert('Login successful');
// // } else {
// //     alert('No account found. Please register.');
// // }
// }



////////////code add to login
function validateloginAccount(ele) {
    console.log(ele.id, ele.value)
    var regex = {
        regName: /^[a-zA-zs]{3,25}$/,
        inputEmail: /^[a-z._]+@[a-zA-z]+\.[a-zA-z]{2,}$/,
        inputPassword: /^[A-Za-z\d@$!%*?&]{8,20}$/,

    };
    var isValid = regex[ele.id].test(ele.value);
    if (isValid) {
        console.log("matched")
        ele.nextElementSibling.classList.replace("d-block", "d-none")

    } else {
        console.log("Not matched")
        // ele..replace("d-block","d-none")
        ele.nextElementSibling.classList.replace("d-none", "d-block")
    }
    return isValid;
}
var logbtn=document.getElementById(logbtn);
function login(ele) {
    if (validateloginAccount(inputEmail) && validateloginAccount(inputPassword)) {
        var userExists = Bbox.find(user => user.rEmail === inputEmail.value && user.rPass === inputPassword.value);
        if (userExists) {
            localStorage.setItem('loggedInUser', JSON.stringify(userExists));
             window.location.href = 'welcome.html'; 
            // window.location.href = 'path/to/welcome.html';
            ele.previousElementSibling.classList.replace("d-block", "d-none")
        } else {
       ele.previousElementSibling.classList.replace("d-none", "d-block")
        }
    } else {
        // ele.nextElementSibling.classList.replace("d-none", "d-block")
        ele.previousElementSibling.classList.replace("d-block", "d-none");
    }
  
    
}

var wel=document.getElementById("wel")

document.addEventListener('DOMContentLoaded', (event) => {
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (wel && loggedInUser) {
       wel.innerText = 'Welcome, ' + loggedInUser.rName + '!';
    }}) 