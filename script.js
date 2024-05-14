const pinNumber = "33654";

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const continueButton = document.getElementById("continueButton");
    const pinNumberEntered = document.getElementById("pinCode");

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


