//ACCESING THE INPUT FIELD WITH ID PASSWORD
const passwordBox = document.getElementById("password");

// ASKING USER FOR THE LENGTH OF PASSWORD
// let userInput = prompt("Length of your password ? ");
// console.log(typeof userInput);
// userInput = Number.parseInt(userInput)
// console.log(typeof userInput);

// const length = userInput;
const length = 12;

//MAKING ALL THE ALPHS+ USED IN PASSWORD MAKING
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "#@$%&*()/*-+|{}[]-=_~^";

//COMBINING ALL THE CHARS 
const allChars = upperCase + lowerCase + number + symbol;

//MAIN LOGIC OF PASSWORD CREATOR
const createPassword = () => {
  //DEFINING PASSWORD
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

//ACTIVATING THE COPY PASSWORD BUTTON
const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};
