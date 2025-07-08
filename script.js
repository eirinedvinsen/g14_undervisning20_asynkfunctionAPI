// Hent "knappen" som skal aktivere noe
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  // Hente elementet som skal bli synlig
  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.remove("hidden");
  navList.classList.add("navList");
});

const sunIcon = document.querySelector("#sunIcon");
console.log(sunIcon);

sunIcon.addEventListener("click", function () {
  const body = document.querySelector("body");

  body.classList.remove("light");
  body.classList.add("dark");
});

//
//
//Async function

setTimeout(function(){console.log("Hei")}, 3000);

console.log("Venter på svar...")

//
//const fruitBowl = ["Apple", "Banana", "Pineapple", "Passionfruit"];

async function fetchingData(){
  try{
    const data = await fetch("Data.json");
    console.log(data);

    const response = await data.json();

    console.log(response[1]);
    const fruitBowl = response.join(",");
    console.log(fruitBowl);

    return fruitBowl;


} catch {
  console.log("Noe gikk galt..");
  console.error(`${error}: Noe gikk galt`);
  alert("Noe gikk galt. Prøv igjen senere!");
}
}

fetchingData();

//const displayData = document.querySelector("#displayData");
//const p = document.createElement ("p");
//p.textContent = fruitBowl;

//displayData.appendChild(p);