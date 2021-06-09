function registerationNo(exitingNumbers) {

   
    var regArray = [] || exitingNumbers;

    function pushReg(regNos) {
        var regStr = regNos.toUpperCase();
        var regForm =/^(CL)\s([0-9]){5}$/;

        var validate = regForm.test(regStr)

        if(validate){

            if (!regArray.includes(regStr)) {
                regArray.push(regStr) 

                return regArray;
 
            }
        }
    }

    
    function getReg() {
        return regArray;
    }

    // function getCount() {
    //     return oldNames.length;
    // }

    function regTowns(radioTownBtn, regNos) {

        var regStr = regNos.toLowerCase();
        var regNo = regStr.charAt(0).toUpperCase();


        if (radioTownBtn === "Cape Town") {

            return regNo;
        }

        if (radioTownBtn === "George") {
            return regNo;
        }

        if (radioTownBtn === "Paarl") {

            return regNo;
        }

        if (radioTownBtn === "Stellenbosch") {

            return regNo;
        }

    }

    function regConditions(regNos) {
        var regForm =/^(CL)\s([0-9]){5}$/;

        
        // var str = names.toLowerCase(); 
        // var name = str.charAt(0).toUpperCase() + str.slice(1);


        // if (!radioBtn && names === "") {
        //     return "Enter name and select a language!";
        // }

        // if (radioBtn && names === "") {
        //     return "Please enter a name!";

        // }

        // if (!radioBtn && names !== "") {
        //     return "Please select a language!";
        // }

        if (!regForm.test(regNos)) {

            return "Please enter a valid registration. E.g CY 56523";

        }
    }

    return {
        pushReg,
        regConditions,
        regTowns,
    }
}
