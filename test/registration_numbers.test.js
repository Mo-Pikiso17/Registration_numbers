describe('Registration function', function () {

    let register = registration();

    describe('Add', function () {

        it('should Add an input of this pattern "CA 123-123".', function () {

            let register = registration();

            register.pushRegister("CA 123-123")

            assert.equal("CA 123-123", register.getReg());

        });

        it('should return an error message if entered input is invalid.', function () {

            let register = registration();

            assert.equal("Please enter a valid registration number i.e. CA 123-123", register.pushRegister('Mod6545dy'));

        });

    });




    describe('Display', function () {

        it('should display a registration number from Paarl', function () {

            register.pushRegister("CL 232-232", "CJ 232-232", "CA 232-232")

            assert.equal("CL 232-232",register.filterP("CL"));
        });

        it('should display a registration number from Cape Town', function () {

            register.pushRegister("CA 232-232", "CJ 232-232", "CL 232-232")

            assert.equal("CA 232-232", register.filterC("CA"));
        });

        it('should display a registration number from Stellenbosch', function () {
            
            register.pushRegister("CJ 232-232", "CJ 232-232", "CL 232-232")


            assert.equal("CJ 232-232", register.filterS("CJ"));
        });

        it('should display a registration numbers for all towns', function () {

            register.pushRegister("CL 232-232", "CA 232-232", "CJ 232-232")

            assert.equal("CL 232-232", register.filterP("CL"));
            assert.equal("CA 232-232", register.filterC("CA"));
            assert.equal("CJ 232-232", register.filterS("CJ"));

        });

        describe('Conditions', function () {


            it('should return "No registration numbers entered for Paarl" if there is no input for Paarl.', function () {

                let register = registration();

                assert.equal("No registration numbers entered for Paarl", register.conditional("", "CJ"));

            });

            it('should return "No registration numbers entered for Cape Town" if there is no input for Cape Town.', function () {

                let register = registration();

                assert.equal("No registration numbers entered for Cape Town", register.conditional("", "CA"));

            });

            it('should return "No registration numbers entered for Stellenbosh" if there is no input for Stellenbosch.', function () {

                let register = registration();

                assert.equal("No registration numbers entered for Stellenbosch", register.conditional("", "CL"));

            });

            it('should return "No registration numbers entered" if there is no input for Display all.', function () {

                let register = registration();

                assert.equal("No Registration Numbers entered", register.conditional("", "All"));

            });

        });

    });


});
