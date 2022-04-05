console.log("HW 7 - problem #1 - game of thrones");

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];
console.log(houses[0].name);

// Function - returns an array of characters belonging to a house
const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

//load the dropdown from houses at page load
const select = document.getElementById("house");

for (let x = 0; x < houses.length; ++x) {
  let option = document.createElement("OPTION"),
    txt = document.createTextNode(houses[x].name);
  option.appendChild(txt);
  option.setAttribute("value", houses[x].code);
  select.insertBefore(option, select.lastChild);
}

//based on selection write characters to the screen
let dropdownlist = "";
document.getElementById("house").addEventListener("change", (e) => {
  dropdownlist = getCharacters(e.target.value);
  document.getElementById("characters").innerHTML = ""; //clear out list

  for (let z = 0; z < dropdownlist.length; ++z) {
    const peeps = document.getElementById("characters");
    const p1 = document.createElement("li");
    p1.innerText = dropdownlist[z];
    peeps.append(p1);
  }
});
