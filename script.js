/*    JavaScript 6th Edition
 *    Chapter 8
 *    Chapter case

 *    Golden Rocks National Park 
 *    Author: 
 *    Date:   

 *    Filename: styles.js
 */

"use strict";

// global variables
var profile = {};
var lodging = [];
var arrayString;
var objectString;
//validate postal
function validatepostal() 
{
   var postalcode;
   postalcode = document.getElementById("postal");
   var postalval= document.getElementById("postal").value;
   var regex = new RegExp(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i);
   var errorDiv = document.getElementById("postalError");
   if (regex.test(postalval)) {
      postalcode.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
   }
   else{
      errorDiv.style.display = "block";
      errorDiv.innerHTML = "Invalid format for postal code![@#@#@#]";
      // change input style
    
      postalcode.style.background= "rgb(255,233,233)";
   }
   
}
// validate entered username
function validateUsername() {
   var unInput = document.getElementById("uname");
   var errorDiv = document.getElementById("usernameError");
   try {
//      if (unInput.value.length < 4) {
      if (/.{4,}/.test(unInput.value) === false) {
         throw "Username must be at least 4 characters long";
      } else if (/\W/.test(unInput.value) === true) {
         throw "Username must contain only letters and numbers";
      }
      // remove any username error styling and message
      unInput.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
      // copy valid username value to profile object
      profile.username = unInput.value;
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      unInput.style.background = "rgb(255,233,233)";
   }
}

// validate entered password
function validatePassword() {
   var pw1Input = document.getElementById("pw1");
   var pw2Input = document.getElementById("pw2");
   var errorDiv = document.getElementById("passwordError");
   try {
//      if (pw1Input.value.length < 8) {
      if (/.{8,}/.test(pw1Input.value) === false) {
         throw "Password must be at least 8 characters";
      } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
         throw "Passwords must match";
      } else if (/[a-zA-Z]/.test(pw1Input.value) === false) {
         throw "Password must contain at least one letter";
      } else if (/\d/.test(pw1Input.value) === false) {
         throw "Password must contain at least one number";
      } else if (/[!@#_]/.test(pw1Input.value) === false) {
         throw "Password must contain at least one of the following symbols: ! @ # _";
      }
      // remove any password error styling and message
      pw1Input.style.background = "";
      pw2Input.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
      // copy valid password to profile object
      profile.password = pw1Input.value;
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      pw1Input.style.background = "rgb(255,233,233)";
      pw2Input.style.background = "rgb(255,233,233)";      
   }
}

// validate entered email
function validateEmail() {
   var emailInput = document.getElementById("emailbox");
   var errorDiv = document.getElementById("emailError");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
//      if (emailInput.value.search(/@/) === -1 || 
//          emailInput.value.lastIndexOf(".") === -1) {
//      if (
//         (/@/.test(emailInput.value) === false) || (
//            (/\...$/.test(emailInput.value) === false) &&
//            (/\....$/.test(emailInput.value) === false) &&
//            (/\.....$/.test(emailInput.value) === false) &&
//            (/\.......$/.test(emailInput.value) === false)
//         )
//      ) {
//      if ((/@/.test(emailInput.value) === false) ||
//          (/\..{2,6}$/.test(emailInput.value) === false)) {
      if (emailCheck.test(emailInput.value) === false) {
         throw "Please provide a valid email address";
      }
       // remove any email error styling and message
      emailInput.style.background = "";
      errorDiv.innerHTML = "";
      errorDiv.style.display = "none";
      // convert email address to lowercase
      emailInput.value = emailInput.value.toLowerCase();
      // copy valid email value to profile object
      profile.email = emailInput.value;

   }
   catch(msg) {
      // display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
}

// convert form input to strings for submission
function convertToString() {
   alert("Success Form");
}

function createEventListeners() {
   var unInput = document.getElementById("uname");
   var pw2Input = document.getElementById("pw2");
   var emailInput = document.getElementById("emailbox");
   var postalinput= document.getElementById("postal");
   if (unInput.addEventListener || postalinput.addEventListener) {
      unInput.addEventListener("change", validateUsername, false); 
      pw2Input.addEventListener("change", validatePassword, false); 
      emailInput.addEventListener("change", validateEmail, false); 
      postalinput.addEventListener("change", validatepostal, false); 
   } else if (unInput.attachEvent || postalinput.attachEvent) {
      unInput.attachEvent("onchange", validateUsername);
      pw2Input.attachEvent("onchange", validatePassword);
      emailInput.attachEvent("onchange", validateEmail);
      postalinput.attachEvent("onchange", validatepostal);
   }

   var button = document.getElementById("createBtn");
   if (button.addEventListener) {
      button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
      button.attachEvent("onclick", convertToString);
      alert("Success Message");
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}