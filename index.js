const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];


let passwordEl = document.getElementById("password-el")
let passwordLength = document.getElementById("password-length")
let randomPassword = "Hello"
var slider = document.getElementById("myRange")
passwordLength.innerHTML = "Password Length: " + slider.value;

slider.oninput = function() {
    passwordLength.innerHTML = "Password Length: " + this.value;
  }

function generatePassword() {
    randomPassword = ""
    document.querySelector('.copy-link-button').style.display = 'inline-block';
    for (i = 0; i < slider.value; i++) {
        randomPassword += characters[Math.floor(Math.random() * characters.length)]
    }

    passwordEl.textContent = randomPassword
}

function copyToClipboard(){
    navigator.clipboard.writeText(randomPassword).then(function() {
        console.log("Password copied to clipboard: " + randomPassword);
        setTimeout(function(){
            passwordEl.textContent = randomPassword
        }, 1000);
        passwordEl.textContent = "Coppied to clipboard"
        
    }, function(err) {
        console.error("Failed to copy password: ", err);
        alert("Failed to copy password. Please try again.");
    });
}
