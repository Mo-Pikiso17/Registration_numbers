function registration(existing) {

    // var pattern = /^[A-Z]{2} \s[0-9]{3}-[0-9]{3}$/
    var pattern = /^[CA-ca]{2}\s[0-9]{3}-[0-9]{3}$/ //|| /^[CL]{2}\s[0-9]{3}-[0-9]{3}$/ || /^[CJ]{2}\s[0-9]{3}-[0-9]{3}$/
    var pattern1 = /^[CL-cl]{2}\s[0-9]{3}-[0-9]{3}$/
    var pattern2 = /^[CJ-cj]{2}\s[0-9]{3}-[0-9]{3}$/


    var list = [] || existing;
    regList1 = [];
    regList2 = [];
    regList3 = [];

    function pushRegister(names) {
        // var str = names.toLowerCase();                        
        var name = names.toUpperCase();

        var validate = pattern.test(name)
        var validate1 = pattern1.test(name)
        var validate1 = pattern2.test(name)


        if (validate) {

            if (!list.includes(name)) {

                list.push(name)

                return list;
            }

            else if (list.includes(name)) {

                return "Registration number already entered!"
            }
        }

        if (validate1) {

            if (!list.includes(name)) {

                list.push(name)

                return list;
            }

            else if (list.includes(name)) {
                
                return "Registration number already entered!"
            }
        }

         if (validate2) {

            if (!list.includes(name)) {

                list.push(name)

                return list;
            }

            else if (list.includes(name)) {

                return "Registration number already entered!"
            }
        }

        else {

            return "Please enter a valid registration number i.e. CA 123-123";

        }
    }



    function filterC() {
        let getFilter1 = list.filter(function (radio) {
            return radio.startsWith("CA");
        });

        return getFilter1;


    }

    function filterP() {
        let getFilter2 = list.filter(function (radio) {
            return radio.startsWith("CL");
        });

        return getFilter2;
    }

    function filterS() {
        let getFilter3 = list.filter(function (radio) {
            return radio.startsWith("CJ");


        });

        return getFilter3;

    }

    function filterA() {
        return list;

    }

    function getReg() {
        return list;
    }

    function conditional(list, radio) {

        if (list === "" && radio === "CA") {
            return "No registration numbers entered for Cape Town";
        }


        if (list === "" && radio === "CJ") {
            return "No registration numbers entered for Paarl";
        }

        if (list === "" && radio === "CL") {
            return "No registration numbers entered for Stellenbosch";

        }

        if (list === "" && radio === "All") {
            return "No Registration Numbers entered";

        }

    }


    return {
        pushRegister,
        getReg,
        conditional,
        filterC,
        filterP,
        filterS,
        filterA,

    }
}