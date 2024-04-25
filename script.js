const pinNumber = "33654";

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    //const agreeCheckBox = document.getElementById("agreeCheckbox");
    const continueButton = document.getElementById("continueButton");
    const policiesText = document.getElementById("policiesText");
    const pinNumberEntered = document.getElementById("pinCode");

    //Disable continue button by default
    continueButton.disabled = true;

    /*//Listen for the checkbox change
    agreeCheckBox.addEventListener("change", function () {
        continueButton.disabled = !this.checked; //enable continue button if checkboxis checked
    });*/




    //show popup on page load
    overlay.style.display = "flex";

    //add scroll event listener to policies text
    policiesText.addEventListener("scroll", function () {
        //check if user scrolled to the bottom
        if (this.scrollHeight - this.scrollTop === this.clientHeight) {
            if (validateCode(pinNumberEntered.value)) {
                continueButton.disabled = false; //Enable continue button if scrolled to the bottom
            }

        }
        else {
            continueButton.disabled = true; //otherwise, disable contiunues
        }
    });

    //Listen for input event on code inpuit field
    pinNumberEntered.addEventListener("input", function () {
        //Disable continue button when code input changes
        continueButton.disabled = true;
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


