console.log("ex 8 do squares");


class Mysquare {
    constructor (side) {
        this.side = side;
        this.peri = this.side * 4;
    }
    mydesc () {
        return `${this.peri} has ${this.side} `;
    }
}


let ansr = prompt("size of one side of square");
let ansr1 = Number(ansr);


const square1 = new Mysquare (ansr1);

//writing to screen

let info = document.getElementById("IS100");
console.log(info);
const newInfo = document.createElement("p");
newInfo.innerHTML = square1.mydesc();
info.appendChild(newInfo);

// create new COB link and insert inbetween two links (added ID=links to HTML - couldn't do any other way)
const newElement = document.createElement("li"); 
newElement.innerHTML = '<li> <a href="https://www.csulb.edu/college-of-business">College of Business</a></li>';
document.getElementById("IS001").insertBefore(newElement, document.getElementById(""));

const div = document.querySelector("ul");
newElement.style.backgroundColor = "yellow";
newInfo.style.backgroundColor = "pink";
div.classList.add("msg");
