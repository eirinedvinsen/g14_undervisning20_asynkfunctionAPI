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
async function fetchCatFacts (){
  try {
    //All JS som skal skje i funksjonen
    const response = await fetch("https://catfact.ninja/facts");
    //console.log(response);

    const data = await response.json();
    //console.log(data.data[4].fact);

    return data;
  } catch (error) {
    //feilmelding 
    console.error(`${error}: Oopsie doopsie somthing went wrong! `)
  }
}

async function displayAllFacts(){
  const catFacts = await fetchCatFacts();
  
  const factList = document.querySelector("#factList");
  console.log(factList);

  catFacts.data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.fact;

    factList.appendChild(listItem);
  })
};

displayAllFacts();

const newFactBtn = document.querySelector("#newFactBtn");
newFactBtn.addEventListener("click", async function(){
  //console.log("Pressed!");

  const catFacts = await fetchCatFacts();
  console.log(catFacts);
  const fact = catFacts.data;
  console.log(fact); 
  const showFact = document.querySelector("#showFact");
  showFact.textContent = catFacts.fact;
});

//fetchCatFacts();

async function pokemonCard (){
  const response = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto");

  const data = await response.json();
  console.log(data);
  console.log(data.stats[0].base_stat + data.stats[0].stat.name);
}

pokemonCard();

//
//
//Async function

//setTimeout(function(){console.log("Hei")}, 3000);

//console.log("Venter på svar...")

//
//const fruitBowl = ["Apple", "Banana", "Pineapple", "Passionfruit"];

//async function fetchingData(){
//  try{
//    const data = await fetch("Data.json");
//    console.log(data);

//    const response = await data.json();

//    console.log(response[1]);
//    const fruitBowl = response.join(",");
//    console.log(fruitBowl);

//    return fruitBowl;


//} catch {
//  console.log("Noe gikk galt..");
//  console.error(`${error}: Noe gikk galt`);
//  alert("Noe gikk galt. Prøv igjen senere!");
//}
//}

//fetchingData();

//const displayData = document.querySelector("#displayData");
//const p = document.createElement ("p");
//p.textContent = fruitBowl;

//displayData.appendChild(p);