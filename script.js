// reusable function section

const hearts = document.getElementsByClassName("heart-icon-clicked");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    let heartNumber = parseInt(
      document.getElementById("heart-number").innerText
    );
    heartNumber += 1;
    document.getElementById("heart-number").innerText = heartNumber;
  });
}

function bitId(id1, id2) {
  const callTheNumber = document.getElementById(id1).innerText;
  const showTheNumber = document.getElementById(id2).innerText;

  const coinsHere = parseInt(document.getElementById("coins-here").innerText);

  if (coinsHere < 20) {
    alert(
      `❌ You do not have enough coins to make the call. You need atleast 20 coins to proceed...`
    );
  }

  if (coinsHere >= 20) {
    alert(`Calling ${callTheNumber} ${showTheNumber}...`);

    let deductedCoins = coinsHere - 20;
    document.getElementById("coins-here").innerText = deductedCoins;
  }
  console.log(callTheNumber);
  console.log(showTheNumber);
  console.log(coinsHere);
}

// ipmlement section using eventlistener

document
  .getElementById("Emergency-number-btn")
  .addEventListener("click", function () {
    bitId("National-number", "show-the-number1");
  });

document
  .getElementById("Police-number-btn")
  .addEventListener("click", function () {
    bitId("Police-Helpline-Number", "show-the-number2");
  });

document
  .getElementById("Fire-service-btn")
  .addEventListener("click", function () {
    bitId("Fire-service-number", "show-the-number3");
  });

document
  .getElementById("Ambulance-service-btn")
  .addEventListener("click", function () {
    bitId("Ambulance-service", "show-the-number4");
  });

document
  .getElementById("women-child-btn")
  .addEventListener("click", function () {
    bitId("Women-and-child", "show-the-number5");
  });

document
  .getElementById("Anti-corruption-btn")
  .addEventListener("click", function () {
    bitId("Aunty-corrupted", "show-the-number6");
  });

document
  .getElementById("Electricity-helpline-btn")
  .addEventListener("click", function () {
    bitId("Electricity-outage", "show-the-number7");
  });

document
  .getElementById("Brac-helpline-btn")
  .addEventListener("click", function () {
    bitId("Brac-helpline", "show-the-number8");
  });

document
  .getElementById("Railway-helpline-btn")
  .addEventListener("click", function () {
    bitId("Railway-helpline", "show-the-number9");
  });

// copy button functionality

document.getElementById("copy-btn-1").addEventListener("click", function(){
  const copiedText = document.getElementById("show-the-number1").innerText;
  navigator.clipboard.writeText(copiedText);
  alert(`The number ${copiedText} is copied`)

  let copyCounter = parseInt(document.getElementById("copy-counter").innerText)

  copyCounter += 1;

  document.getElementById("copy-counter").innerText = copyCounter;
})