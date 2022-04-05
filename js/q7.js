// #7 array / function / array function;

const newList = [];

const oldList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];
//let x = 0
function calcGrades(x) {
  let fn = oldList[x].firstName;
  let ln = oldList[x].lastName;
  let minscore = Math.min(...oldList[x].scores);
  let maxscore = Math.max(...oldList[x].scores);
    let avgscore = oldList[x].scores.reduce((acc, val) => acc + val) / oldList[x].scores.length;
  newList.push({
    fn: fn,
    ln: ln,
    mins: minscore,
    maxs: maxscore,
    avgs: avgscore,
  });
  console.log("min - max - avg",minscore,maxscore,avgscore);
  return newList;
}

arrlen = oldList.length;
for (let x = 0; x < arrlen; x++) {
    if (oldList[x].lastName[0] === "C"){
  console.log(calcGrades(x));}
}


