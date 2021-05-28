let nameField = document.getElementById("nameField");
let errorText = document.getElementById("errorText");

// regex
let checkLetters = /^[A-Za-z]+$/;

//checks if name field only contains letters
let validate = () => {
  let isValid = checkLetters.test(nameField.value);
  if (!isValid) {
    errorText.style.color = "red";
    errorText.style.display = "list-item";
    errorText.innerHTML = "Brug kun alfabetiske karakter i dit navn";
  } else {
    errorText.style.color = "green";
    errorText.style.display = "list-item";
    errorText.innerHTML = "Tak for din besked";
  }
};
