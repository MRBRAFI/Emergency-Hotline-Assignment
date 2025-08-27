const hearts = document.getElementsByClassName("heart-icon-clicked");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    console.log("he he I am clicked");

    let heartNumber = parseInt(document.getElementById("heart-number").innerText);
    heartNumber += 1;
    document.getElementById("heart-number").innerText = heartNumber;
  });
}
