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


var pattern = /^[A-Z]{2}\s[0-9]{3}-[0-9]{3}$/

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


function addFun() {

    var input = document.getElementById("reg").value
    //var addBtn = document.getElementById("btn").value
    var validate = pattern.test(input);
    var key = registerInsta.getReg();
    var html = '';

    if (validate) {

        if (!regs.includes(input)) {

            registerInsta.pushRegister(input)
        }

        // if (regs !== "") {

        //     clearMsg.innerHTML = "Registration number entered";
        //     append(key)
        //     setTimeout(function () {
        //         errorMsg.innerHTML = ""
        //     }, 3000);

        // }


        if (regs !== ""){

            clearMsg.innerHTML = "Registration number entered!";
            setTimeout(function () {
                clearMsg.innerHTML = ""
            }, 3000);


            key.forEach(function (key) {
                
                html += '<li>' + key + '</li>';
            });

        }

        localStorage.setItem('registration', JSON.stringify(registerInsta.getReg()));

    }

    else {

        errorMsg.innerHTML = "Please enter a valid registration number i.e. CA 123-123";

        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000);
    }

    document.querySelector('#regList').innerHTML = html;


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
            // += adds an item to the existing value
            // It's the same as writing this:
            // html = html + '<li>' + wizard + '</li>';
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
    
    else if (radio.value = "All"){

        if(localData === null) {
    
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


function conditions() {

    var radio = document.querySelector("input[name='townBtn']:checked");
    var tOne = registerInsta.filterC(localData);
    var tTwo = registerInsta.filterP(localData);
    var tThree = registerInsta.filterS(localData);
    // var all = registerInsta.filterA(localData);

    if (tOne.length === 0 && radio.value === "CA") {
        errorMsg.innerHTML = "No registration numbers entered for Cape Town";

        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000);
    }


    if (tTwo.length === 0 && radio.value === "CL") {
        errorMsg.innerHTML = "No registration numbers entered for Paarl";

        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000);
    }

    if (tThree.length === 0 && radio.value === "CJ") {
        errorMsg.innerHTML = "No registration numbers entered for Stellenbosch";
 
        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000);
    }

    // if(localData.length < 0 && radio.value === "All"){
    //     errorMsg.innerHTML = "No registration numbers for all Towns";

    //     setTimeout(function () {
    //         errorMsg.innerHTML = ""
    //     }, 3000);
    // }

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

