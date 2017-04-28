/*global document, validateForm, console*/
var submit = document.getElementById("send");

submit.addEventListener('click', function (e) {
    "use strict";
    e.preventDefault();
    validateForm();
});

function validateForm() {
    "use strict";
    var name = document.getElementById('name'),
        lastname = document.getElementById('last-name'),
        firstChar = /[A-Z]{1}[a-z]+/,

        idNumber = document.getElementById("dni"),
        idRegex = /[0-9]{8}/,

        celNumber = document.getElementById("cel"),
        celRegex = /[9]{1}[0-9]{8}$/,

        homeNumber = document.getElementById("home"),
        homeRegex = /[0-9]{7}/,

        password = document.getElementById("password"),
        confirmation = document.getElementById("confirmation"),

        comments = document.getElementById("comments"),

        checkbox = document.getElementById("terms");
    //Name validation
    if (firstChar.test(name.value) === false) {
        document.getElementById("name-error").style.display = "inline-block";
    } else {
        document.getElementById("name-error").style.display = "none";
    }
    //Last name validation
    if (firstChar.test(lastname.value) === false) {
        document.getElementById("lastname-error").style.display = "inline-block";
    } else {
        document.getElementById("lastname-error").style.display = "none";
    }
    //ID validation
    if (idRegex.test(idNumber.value) === false) {
        document.getElementById("dni-error").style.display = "inline-block";
    } else {
        document.getElementById("dni-error").style.display = "none";
    }
    //Cel number validation
    if (celRegex.test(celNumber.value) === false) {
        document.getElementById("cel-error").style.display = "inline-block";
    } else {
        document.getElementById("cel-error").style.display = "none";
    }
    //Home number validation
    if (homeRegex.test(homeNumber.value) === false) {
        document.getElementById("home-error").style.display = "inline-block";
    } else {
        document.getElementById("home-error").style.display = "none";
    }
    //Password validation
    if (password.value !== confirmation.value) {
        document.getElementById("password-error-a").style.display = "inline-block";
        document.getElementById("password-error-b").style.display = "none";
    } else if (password.value === "") {
        document.getElementById("password-error-b").style.display = "inline-block";
        document.getElementById("password-error-a").style.display = "none";
    } else {
        document.getElementById("password-error-a").style.display = "none";
        document.getElementById("password-error-b").style.display = "none";
    }
    //Comments validation
    if (comments.value === "") {
        document.getElementById("comments-error").style.display = "inline-block";
    } else {
        document.getElementById("comments-error").style.display = "none";
    }
    //Checkbox validation
    if (checkbox.checked === false) {
        document.getElementById("checkbox-error").style.display = "inline-block";
    } else {
        document.getElementById("checkbox-error").style.display = "none";
    }
}