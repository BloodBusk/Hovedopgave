// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
let img = document.getElementsByClassName("myImgC");
let modalImg = document.getElementById("img");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "auto";
    modalImg.style.height = "90%";
  });
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

let dropDownContainer = document.getElementsByClassName("dropDownContainer");
let dropDownHidden = document.getElementsByClassName("dropDownHidden");

// display hidden text on click
for (let i = 0; i < img.length; i++) {
  dropDownContainer[i].addEventListener("click", () => {
    dropDownHidden[i].classList.toggle("toggleHidden");
  });
}


