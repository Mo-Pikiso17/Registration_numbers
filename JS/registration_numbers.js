// radio buttons
var townBtnElem = document.querySelector('.townBtn');

//Add button or greet me button
var addBtnElem = document.querySelector('.addBtn');

//Add button or greet me button
var showBtnElem = document.querySelector('.showBtn');

//Textbox
var textBoxElement = document.querySelector('.reg');

//Display error message space below
var errorMsg = document.querySelector('.erroMsgs');

//Display after browser has been cleared
var clearMsg = document.querySelector('.clearMsgs');

//Display message space below the show button
var showElem = document.querySelector('.regOutput');

var clearBtnElem = document.querySelector('.clearBtn')


var pattern = /^[CcAa]{2}\s[0-9]{3}-[0-9]{3}$/
var patternO = /^[CcLl]{2}\s[0-9]{3}-[0-9]{3}$/
var patternT = /^[CcJj]{2}\s[0-9]{3}-[0-9]{3}$/


var regs = [];

var localData;

if (localStorage['registration']) {

    localData = JSON.parse(localStorage.getItem('registration'))
}

var registerInsta = registration(localData);

if (localData) {
    html = ''

    localData.forEach(function (localData) {

        html += '<li>' + localData + '</li>';
    });

    document.querySelector('#regList').innerHTML = html
}


function append(plateIn) {
    document.getElementById("regList").innerHTML = "";

    var carry = document.createElement("li");
    var plus = document.createTextNode(plateIn);
    carry.appendChild(plus);
    document.getElementById("regList").appendChild(carry);
}
addBtnElem.addEventListener('click', append)


function addFun(e) {

    var input = document.getElementById("reg").value.toUpperCase();
    var localData = JSON.parse(localStorage.getItem('registration'))

    var validate = input.match(pattern);
    var validateO = input.match(patternO);
    var validateT = input.match(patternT);

    var key = registerInsta.getReg();

    var html = '';

    // Push errors into array
    let message = [];

    if (!regs.includes(input)) {

        if (validate) {

            registerInsta.pushRegister(input)

            key.forEach(function (key) {

                html += '<li>' + key + '</li>';

            });


            localStorage.setItem('registration', JSON.stringify(registerInsta.getReg()));
        }

        else if (validateO) {

            registerInsta.pushRegister(input)


            key.forEach(function (key) {

                html += '<li>' + key + '</li>';
            });

            localStorage.setItem('registration', JSON.stringify(registerInsta.getReg()));

        }

        else if (validateT) {

            registerInsta.pushRegister(input)


            key.forEach(function (key) {

                html += '<li>' + key + '</li>';
            });

            localStorage.setItem('registration', JSON.stringify(registerInsta.getReg()));


        }else {

            message.push("Please enter a valid registration number i.e. CA 123-123")
    
        }

    } if(localData == input || localData == input || localData == input){

        !registerInsta.pushRegister(input)

        message.push("Registration number already entered!")

    }
    
// Display errors array
    if (message.length > 0) {
        e.preventDefault()
        errorMsg.innerHTML = message.join(", ")

        setTimeout(function () {
            errorMsg.innerHTML = ""

        }, 3000);

    }

    
    document.querySelector('#regList').innerHTML = html;

    // clear textbox
    document.getElementById("reg").value = "";

}
addBtnElem.addEventListener('click', addFun)




function showFun() {

    var html = ''


    var localData = JSON.parse(localStorage.getItem('registration'))


    var radio = document.querySelector("input[name='townBtn']:checked");
    var tOne = registerInsta.filterC(localData);
    var tTwo = registerInsta.filterP(localData);
    var tThree = registerInsta.filterS(localData);
    // var all = registerInsta.filterA()

    if (radio.value === "CA") {
        // append(tOne)

        tOne.forEach(function (tOne) {
           
            html += '<li>' + tOne + '</li>';
        });
    }

    else if (radio.value === "CL") {

        tTwo.forEach(function (tTwo) {

            html += '<li>' + tTwo + '</li>';
        });

    }

    else if (radio.value === "CJ") {


        tThree.forEach(function (tThree) {
            html += '<li>' + tThree + '</li>';
        });


    }

    else if (radio.value = "All") {


        if (localData === null) {

            errorMsg.innerHTML = "No Registration Numbers entered";

            setTimeout(function () {
                errorMsg.innerHTML = ""
            }, 3000);
        }

        else {
            localData.forEach(function (localData) {

                html += '<li>' + localData + '</li>';
            });
        }
    }


    document.querySelector('#regList').innerHTML = html;



}
showBtnElem.addEventListener('click', showFun)


function conditions(e) {

    // Push errors into array
    let messages = [];


    // var radio = document.querySelector("input[name='townBtn']:checked");
    var radio = document.querySelector("input[name='townBtn']:checked");

    var tOne = registerInsta.filterC(localData);
    var tTwo = registerInsta.filterP(localData);
    var tThree = registerInsta.filterS(localData);
    // var all = registerInsta.filterA(localData);

    if (tOne.length === 0 && radio.value === "CA") {
        messages.push("No registration numbers entered for Cape Town");
    }

    if (tTwo.length === 0 && radio.value ==="CL") {

        messages.push("No registration numbers entered for Paarl");
        
    }

    if (tThree.length === 0 && radio.value === "CJ") {
        messages.push("No registration numbers entered for Stellenbosch");
    }

    // Display errors array
    if (messages.length > 0) {
        e.preventDefault()
        errorMsg.innerHTML = messages.join(", ")

        setTimeout(function () {
            errorMsg.innerHTML = ""

        }, 3000);

    }

    // uncheck radio but
    radio.checked = false;

}

showBtnElem.addEventListener('click', conditions)


function clears() {

    setTimeout(function () {
        location.reload()
        localStorage.clear()
    }, 2000);

    setTimeout(function () {
        clearMsg.innerHTML = "The page has been successfully reloaded";
    }, 1000);

}

clearBtnElem.addEventListener('click', clears)

