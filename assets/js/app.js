const generatePassword = document.getElementById("generate-password");
const copyPassword = document.getElementById("copy-password");
const generateButton = document.getElementById("generate-button");
const randomPasswordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "absdefghijklmnopqrstuwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + symbol + number;
generateButton.addEventListener("click", () => {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (randomPasswordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  generatePassword.value = password;
});

copyPassword.addEventListener("click", async function () {
  const passwordToCopy = generatePassword.value;

  try {
    await navigator.clipboard.writeText(passwordToCopy);
    console.log("Password copied to clipboard.");
  } catch (err) {
    console.error("Failed to copy password: ", err);
  }
});


// hide and show password

let showPassword = document.getElementById("show-password");
let shoImg = document.getElementById("show-img");

shoImg.addEventListener("click", () => {
    if(showPassword.type == "password") {
        showPassword.type = "text";
        shoImg.src = "assets/img/eye-open.png"
    }else {
        showPassword.type = "password"
        shoImg.src="assets/img/eye-close.png"
    }
})

// How strong is the password

const testInput = document.getElementById("test-input");
const testMassage = document.getElementById("test-massage");
const strenght = document.getElementById("strenght");

testInput.addEventListener("input", () => {
    if(testInput.value.length > 0) {
        testMassage.style.display = "block";
    } else {
        testMassage.style.display = "none"
    }
    if(testInput.value.length < 4) {
        strenght.innerHTML = "weak";
        testInput.style.borderColor = "#ff5925";
        testMassage.style.color = "#ff5925";
    } 
    else if (testInput.value.length >=4 && testInput.value.length < 8) {
        strenght.innerHTML = "medium";
        testInput.style.borderColor = "yellow";
        testMassage.style.color = "yellow";
    } 
    else if (testInput.value.length >= 8) {
        strenght.innerHTML = "strong";
        testInput.style.borderColor = "#26d730";
        testMassage.style.color = "#26d730";
    }
})