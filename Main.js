let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let messegeError = document.getElementById('messege-error')
let submitError = document.getElementById('submit-error')

let ContactName = document.getElementById('contactName')

let PhoneName = document.getElementById('PhoneName')

let emailName = document.getElementById('emailName')

let messegeName = document.getElementById('messegeName')

let submitName = document.getElementById('messegeBTN')


function UserName () {
    let nameValue = ContactName.value;
    if(nameValue.length == 0){
        nameError.innerHTML = "Enter a valid Name"
        return false ;
    }
    
    if(!nameValue.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Enter Full Name"
        return false;
    }
    nameError.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true
}

ContactName.addEventListener('keyup', UserName)



function PhoneNum () {
    let PhoneValue = PhoneName.value;
    
    if(PhoneValue.length == 0){
        phoneError.innerHTML = "Phone Num is Requierd"
    return false;
    }
    if (PhoneValue.match(/[^0-9]/)) { 
        phoneError.innerHTML = "Only digits allowed";
        return false;
    }
    if(PhoneValue.length !== 10){
        phoneError.innerHTML = "Phone num is invalid"
    return false;
    }
    
    phoneError.innerHTML = `<i class="bi bi-check-circle-fill"></i>`
    return true;
}
PhoneName.addEventListener('keyup', PhoneNum)



function Emailadd () {
    let emailValue = emailName.value;
    
    if(emailValue.length == 0){
        emailError.innerHTML ="Email Requierd"
        return false;
    }
    if(!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Invalid Format"
        return false;
    }
    emailError.innerHTML = `<i class="bi bi-check-circle-fill"></i>`
    return true;
}

emailName.addEventListener('keyup', Emailadd)



function Messege (){
    let messegeValue = messegeName.value;
    
    let Requierd = 30;
    
    let left = Requierd - messegeValue.length;
    
    if(left > 0){
        messegeError.innerHTML = left + " More Characters Requierd"
        return false;
    }
    messegeError.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    return true;
}
messegeName.addEventListener('keyup',Messege)



let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    if(!UserName() || !PhoneNum() || !Emailadd() || !Messege()){
        e.preventDefault();
        submitError.innerHTML = "Fill the Form Please";
    } else {
        submitError.innerHTML = "";
    }
});