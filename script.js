const pinNumber = "33654";

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const continueButton = document.getElementById("continueButton");
    const pinNumberEntered = document.getElementById("pinCode");
    //download & activate buttons for page
    //NewEmployeeData document
    const newEmployeeDataDOC = document.getElementById("newEmployeeDataDOC");
    const newEmpButton = document.getElementById("activateButton1");
    //90 Days Intro Period 
    const ninetyDays = document.getElementById("ninetyDays");
    const ninetyDaysButton = document.getElementById("activateButton2");
    //Background auth
    const backgroundAuth = document.getElementById("backgroundAuth");
    const backgroundAuthButton = document.getElementById("activateButton3");
    //Employment Application
    const empApplication = document.getElementById("empApplication");
    const empApplicationButton = document.getElementById("activateButton4");
    //Form of notice and employee consent
    const formConsent = document.getElementById("formConsent");
    const formConsentButton = document.getElementById("activateButton5");
    //i9 form
    const i9Form = document.getElementById("i9Form");
    const i9FormButton = document.getElementById("activateButton6");
    //pre-Employment Drug consent
    const preEmpConsent = document.getElementById("preEmpConsent");
    const preEmpConsentButton = document.getElementById("activateButton7");

    const viewButtons = document.querySelectorAll(".viewButton");
    //Link to redirect to jotform
    const redirectLink = document.getElementById("redirectLink");

    //Count of the buttons pressed
    let activatedCount = 0;

    //Disable continue button by default
    continueButton.disabled = true;

    //show popup on page load
    overlay.style.display = "flex";



    //Listen for input event on code inpuit field
    pinNumberEntered.addEventListener("input", function () {
        //Enable continue button if the entered code is correct
        continueButton.disabled = !validateCode(pinNumberEntered.value);
    });

    //add event listener to continue button
    continueButton.addEventListener("click", function () {
        continueToPage();
    });

    //Listen for click event on the download link
    //New Employee Data Document
    newEmployeeDataDOC.addEventListener("click", function () {
        //enable the button when the download link is attached
        newEmpButton.disabled = false;
    });
    //90 days Intro Period Document
    ninetyDays.addEventListener("click", function () {
        ninetyDaysButton.disabled = false;
    });

    //background auth
    backgroundAuth.addEventListener("click", function () {
        backgroundAuthButton.disabled = false;
    });

    //Employment application
    empApplication.addEventListener("click", function () {
        empApplicationButton.disabled = false;
    });

    //Form of notice and employee consent
    formConsent.addEventListener("click", function () {
        formConsentButton.disabled = false;
    });
    //i9 form
    i9Form.addEventListener("click", function () {
        i9FormButton.disabled = false;
    });

    //pre-employment drug consent
    preEmpConsent.addEventListener("click", function () {
        preEmpConsentButton.disabled = false;
    });


    //Function to check if all buttons are activated
    function checkActivation() {
        if (activatedCount === viewButtons.length) {
            redirectLink.style.display = "block"; //Display the redirect link
        }
    }

    //Listen for click event on each view button
    viewButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            //Change the button text to "Viewed" when clicked
            button.textContent = "Viewed";
            button.disabled = true; //Disable the button after is clicked
            activatedCount++; //Increment the count of the activated buttons
            checkActivation();
        });
    });
});

//Function to validate the entered code
function validateCode(code) {
    if (code === pinNumber) {
        return true;
    }
}

//Function to hide the popup and continue to the page 
function continueToPage() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none"; //Hide the pop up
}


