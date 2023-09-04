let getNestReportData = async () => {
  // Replace ./data.json with your JSON feed
  await fetch("./data/nest.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // Work with JSON data here
      rawText = data;
      buildArray(rawText);
    })
    .catch((err) => {
      console.log(err);
      // Do something for an error here
    });
};
getNestReportData();

let buildArray = (text) => {
  let questArray = [];
  rawArray = text.split(/\r?\n|\r|\n/g).slice(2);
  for (let item of rawArray) {
    questArray.push(item.replace(/:.*:/, "").trim());
  }
  buildGeneration(questArray);
};

/* 
Generation 1 – Kanto – 151 Pokémon
Generation 2 – Johto – 100 New Pokémon
Generation 3 – Hoenn – 135 New Pokémon
Generation 4 – Sinnoh – 107 New Pokémon
Generation 5 – Unova – 156 New Pokémon
Generation 6 – Kalos – 72 New Pokémon
Generation 7 – Alola – 88 New Pokémon
Generation 8 – Galar – 96 New Pokémon
Generation 9 – Paldea – 103 New Pokémon
*/

let gen1 = ["Kanto"];
let gen2 = ["Johto"];
let gen3 = ["Hoenn"];
let gen4 = ["Sinnoh"];
let gen5 = ["Unova"];
let gen6 = ["Kalos"];
let gen7 = ["Alola"];
let gen8 = ["Galar"];
let gen9 = ["Paldea"];

let buildGeneration = (allGen) => {
  if (allGen.find((item) => item === "Gen 1"))
    gen1.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 1") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 2"))
    gen2.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 2") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 3"))
    gen3.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 3") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 4"))
    gen4.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 4") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 5"))
    gen5.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 5") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 6"))
    gen6.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 6") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 7"))
    gen7.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 7") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 8"))
    gen8.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 8") + 1,
        allGen.findIndex((item) => item === "")
      )
    );
  allGen[allGen.findIndex((item) => item === "")] = "#";
  if (allGen.find((item) => item === "Gen 9"))
    gen9.push(
      allGen.slice(
        allGen.findIndex((item) => item === "Gen 9") + 1,
        allGen.findIndex((item) => item === "")
      )
    );

  buildKanto(gen1);
};

let buildKanto = (gen1) => {
  if (gen1[1] === undefined) return;
  let ui = document.getElementById("gen1");
  let h1 = document.createElement("h1");
  h1.textContent = gen1[0];
  h1.classList.add("genTitle");
  for (item of gen1[1]) {
  }
};
