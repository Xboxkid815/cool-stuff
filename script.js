let nav = document.createElement("nav");
for (let [name, url] of [
  ["Home", "index.html"],
  ["Tourist Attractions", "destinations.html"],
  ["Trip Price Calculator", "price.html"],
]) {
  if (window.location.pathname.includes(url)) {
    name += " <";
  }
  let home = document.createElement("a");
  home.href = url;
  home.textContent = name;
  nav.appendChild(home);
}

document.body.prepend(nav);

// Trips booked counter
let numSpan = document.getElementById("number");
if (numSpan) {
  let number = Math.floor(Math.random() * 8000) + 1000;
  numSpan.textContent = `${number} Trips Booked!`;
  setInterval(function () {
    if (Math.random() < 0.1) {
      number += Math.ceil(Math.random() * 4);
      document.getElementById("number").textContent = `${number} Trips Booked!`;
    }
  }, 100);
}

// Line items
let lineItems = document.getElementById("line-items");
if (lineItems) {
  let total = 0;
  let names = [
    "Mikolos",
    "🧔🏽 Yanis",
    "Spiros",
    "🧑🏻 Anastasia",
    "George",
    "Andrew",
    "Sophia",
    "Helena",
  ];
  let cities = ["Athens 🇬🇷", "Sparta", "Crete 🏝"];
  let emoji = ["😎", "🫩", "🤑", "🤐", "👨🏼‍🐰‍👨🏽"];
  for (let [name, min, max] of [
    ["Flight", 440, 2400],
    ["Hotel", 480, 4000],
    [
      `Guided tour of ${cities[Math.floor(Math.random() * cities.length)]}`,
      40,
      70,
    ],
    [
      `${names[Math.floor(Math.random() * names.length)]}'s Fee ${emoji[Math.floor(Math.random() * emoji.length)]}`,
      10,
      400,
    ],
  ]) {
    let cost = Math.floor(Math.random() * (max - min) + min);
    total += cost;
    let div = document.createElement("div");
    div.className = "line-item";
    for (let s of [name, `$${cost}`]) {
      let p = document.createElement("p");
      p.textContent = s;
      div.appendChild(p);
    }
    lineItems.appendChild(div);
  }
  let div = document.createElement("div");
  div.className = "line-item";
  for (let s of ["Total", `$${total}`]) {
    let p = document.createElement("p");
    p.textContent = s;
    div.appendChild(p);
  }
  lineItems.appendChild(div);
}
