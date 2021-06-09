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

// ^ "start" and $ "end" with Alphabets or characters matcthing from a to z both in Caps or lowercase.

var regForm =/^([A-Z]){2}\s([0-9]){5}$/;

var existingNumber; 

var regArray = [];

var regInsta = registerationNo(existingNumber);

// var regInsta = registrations();


// var existingNumbers;

// if (localStorage['registration']) {

//     existingNumbers = JSON.parse(localStorage.getItem('registration'));

// }

// if (existingNumbers) {
//     showElem.innerHTML = existingNumbers;
// }

// function addReg() {

//     // var townBtnElem = document.querySelector("input[name='languageBtn']:checked");
//     var number = textBoxElement.value;

//     var str = number.toLowerCase();
//     var regNo = str.charAt(0).toUpperCase() + str.slice(1);
//     regForm.test(regNo)

//     if (!regArray.includes(regNo)) {
//         regArray.push(regNo);
//     }

//     localStorage.setItem('registration', JSON.stringify(regArray));


// }

// addBtnElem.addEventListener('click', addReg);




function regTown() {
    
    //list
    var ul = document.getElementById('regList');

    //textbox
    var regNumber = document.getElementById('reg');
    var regNum = regInsta.pushReg(regNumber.value);
    
    //create items in list
    var li = document.createElement('li');
    li.setAttribute('id',regNum);
    li.appendChild(document.createTextNode(regNum));
    ul.appendChild(li);
    // alert(regNum);

    //regArray.push(regNum);

    localStorage.setItem('registration', JSON.stringify(regNum));


}

addBtnElem.addEventListener('click', regTown);
// console.log(regNumber)

// function showRegNo() {
//     var townBtnElem = document.querySelector("input[name='languageBtn']:checked");
//     var regNo = textBoxElement.value;

//     regArray.push(regNo);

//     localStorage.setItem('registration', JSON.stringify(regArray));

//     if (townBtnElem === "Cape Town") {

//         showElem.innerHTML = regNo
//         // return "Hello, " + name;
//     }

//     if (radioBtn === "George") {
//         showElem.innerHTML = regNo
//     }

//     if (radioBtn === "Paarl") {

//         showElem.innerHTML = regNo
//     }

//     if (radioBtn === "Stellenbosch") {

//         showElem.innerHTML = regNo
//     }

//     JSON.parse(localStorage.getItem('registration'));
// }

// addBtn.addEventListener('click', showRegNo);

    

// function regAdd() {
//     var showElem = document.querySelector('.regOutput');
//     var x = document.createElement("button")


//     var townBtnElem = document.querySelector("input[name='languageBtn']:checked");
//     var regNo = textBoxElement.value;

  
//     // var error = regInsta.regConditions(townBtnElem, regNo)

//         //if (regForm.test(regNo)) {
//             // regInsta.pushReg(regNo)
//             x.innerText = regInsta.pushReg(regNo)
//             showElem.appendChild(x)

//             localStorage.setItem('registration', JSON.stringify(regInsta.getReg()))
//             // nameCounterElem.innerHTML = greetInsta.getCount();

//         // } else {

//         //     errorMsg.innerHTML = "Please enter a valid registration. E.g CY 56523";

//         //     setTimeout(function () {
//         //         document.querySelector('.reg').value = "";

//         //         errorMsg.innerHTML = "";
//         //     }, 3000);
//         //     return;
//         // }
//     // language.checked = false;
//     // document.querySelector('.name').value = ""; 
    
// }

// addBtnElem.addEventListener('click', regAdd);





















