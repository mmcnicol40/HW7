console.log("HW 7 - problem #2 - autocomplete");

// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan",
];
/*
  const newElement = document.createElement("ul");
  newElement.classList.add("suggestion");
  document.getElementById("suggestions").insertBefore(newElement, document.getElementById(""));
*/

let input = document.getElementById("country");

input.addEventListener("keyup", (e) => {
  removeElements();  //clears out list when changing letters









   //for loop to check letters
  for (let i of countryList) {
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      let listItem = document.createElement("li");
       listItem.classList.add("list-items");
       listItem.setAttribute("onclick", "displayNames('" + i + "')");
      
       //takes the matched letters and bolds them in the list
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);

      //writes the words that match the input letters to the screen
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

//displays clicked list item in the input box
function displayNames(value) {
  input.value = value;
}

//removes all the listed countries each time a letter changes in the input box
function removeElements(){
let items = document.querySelectorAll(".list-items");
items.forEach((item) => {
  item.remove();
})
}
