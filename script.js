// variables section

let arrOfHistory = [];

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

  if (coinsHere >= 20) {
    alert(`📞 Calling ${callTheNumber} ${showTheNumber}...`);

    let deductedCoins = coinsHere - 20;
    document.getElementById("coins-here").innerText = deductedCoins;
  }
}

// copy counter reusablity

function copyTheNumber(n){
  const copiedText = document.getElementById(n).innerText;
  navigator.clipboard.writeText(copiedText);
  alert(`The number ${copiedText} is copied`);

  let copyCounter = parseInt(document.getElementById("copy-counter").innerText);

  copyCounter += 1;

  document.getElementById("copy-counter").innerText = copyCounter;
};

// ipmlement section using eventlistener

document
  .getElementById("Emergency-number-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }
    
    bitId("National-number", "show-the-number1");
   
  
   const dataOfHistory = {
    serviceName : "National Emergency number",
    helpline : 999,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
   
  })

document
  .getElementById("Police-number-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Police-Helpline-Number", "show-the-number2");

    const dataOfHistory = {
    serviceName : "Police Helpline Number",
    helpline : 999,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("Fire-service-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Fire-service-number", "show-the-number3");

    const dataOfHistory = {
    serviceName : "Fire Service Number",
    helpline : 999,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
   
  });

document
  .getElementById("Ambulance-service-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Ambulance-service", "show-the-number4");

    const dataOfHistory = {
    serviceName : "Ambulance Service",
    helpline : '1994-999999',
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("women-child-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }
   
    bitId("Women-and-child", "show-the-number5");

    const dataOfHistory = {
    serviceName : "Women & Child Helpline",
    helpline : 109,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("Anti-corruption-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Aunty-corrupted", "show-the-number6");

    const dataOfHistory = {
    serviceName : "Anti-Corruption Helpline",
    helpline : 106,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("Electricity-helpline-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Electricity-outage", "show-the-number7");

    const dataOfHistory = {
    serviceName : "Electricity Helpline",
    helpline : 16216,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("Brac-helpline-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Brac-helpline", "show-the-number8");

    const dataOfHistory = {
    serviceName : "Brac Helpline",
    helpline : 16445,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

document
  .getElementById("Railway-helpline-btn")
  .addEventListener("click", function () {

    const coinsCounter = parseInt(document.getElementById("coins-here").innerText);

   if(coinsCounter < 20){
    alert(
      `❌ You do not have enough coins to make the call. You need at least 20 coins to proceed...`)
    return;
   }

    bitId("Railway-helpline", "show-the-number9");

    const dataOfHistory = {
    serviceName : "Bangladesh Railway Helpline",
    helpline : 163,
    time:new Date().toLocaleTimeString()
   }

   arrOfHistory = [];

   arrOfHistory.push(dataOfHistory);
   
   const historySection = document.getElementById("history-section");

   for(const info of arrOfHistory){
   const infoSection = document.createElement("div");
   infoSection.innerHTML=`
   <div class="flex justify-between items-center bg-[#80808027] h-28 w-[100%] mt-5 rounded-xl p-3">
              <div class="">
              <h1 class="font-bold md:text-2xl">${info.serviceName}</h1>
              <p class="md:text-2xl font-semibold mt-2">${info.helpline}</p>
              </div>

              <p class="">${info.time}</p>
            </div>
   `;
   historySection.appendChild(infoSection);
   }
  });

// copy button functionality

document.getElementById("copy-btn-1").addEventListener("click", function(){
 copyTheNumber("show-the-number1");
});

document.getElementById("copy-btn-2").addEventListener("click", function(){
 copyTheNumber("show-the-number2");
});

document.getElementById("copy-btn-3").addEventListener("click", function(){
 copyTheNumber("show-the-number3");
});

document.getElementById("copy-btn-4").addEventListener("click", function(){
 copyTheNumber("show-the-number4");
});

document.getElementById("copy-btn-5").addEventListener("click", function(){
 copyTheNumber("show-the-number5");
});

document.getElementById("copy-btn-6").addEventListener("click", function(){
 copyTheNumber("show-the-number6");
});

document.getElementById("copy-btn-7").addEventListener("click", function(){
 copyTheNumber("show-the-number7");
});

document.getElementById("copy-btn-8").addEventListener("click", function(){
 copyTheNumber("show-the-number8");
});

document.getElementById("copy-btn-9").addEventListener("click", function(){
 copyTheNumber("show-the-number9");
});

document.getElementById("clear-history").addEventListener("click", function(){
  let HistorySection = document.getElementById("history-section");
   
  HistorySection = "";

  document.getElementById("history-section").innerHTML = HistorySection;
});