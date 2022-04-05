console.log(" scratch - array - use filter, map and reduce");
myArray = [1,2,3,4,5,6,7,8,9,10];

// array of odd numers
console.log(myArray.filter(x => x % 2 !== 0));

// array of numbrs divisble by 2 or 5
console.log(myArray.filter(x => (x % 2 === 0) || (x % 5 === 0) ));

//array of numbers divisble by 3 squared (step 1 is it divisble by 3 to square)
console.log(myArray.filter(x => (x % 3 === 0)).map((x) => x * x, 0));

//sum an array of #1 #'s divisible by 5; squared)
console.log(myArray.filter(x => (x % 5 === 0)).map((x) => x * x, 0).reduce((acc, val) => acc+ val));
