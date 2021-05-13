// Data Desturcturing

let arr = [1, 2, 3, 4, 5];

let [fir, sec, thi] = arr;
console.log(fir, sec, thi);

let arr1 = [1, 2, 3];

let [one, two] = arr1;
console.log(one, two);

let arr2 = [1, 2];
let [one1, two1, three] = arr2;
console.log(one1, two1, three);

//Copying an array
let colors = ["Red", "Yellow"];
let newColors = [...colors];
console.log(newColors);

//Without using spread operator

let colors = ["Red", "Yellow"];
let newColors = colors;
newColors.push("Green");
console.log(newColors);
console.log(colors);

//Using spread operator
let colors = ["Red", "Yellow"];
let newColors = [...colors];
newColors.push("Green");
console.log(newColors);
console.log(colors);

//Spread operator and Strings
let str = ["A", ..."EIO", "U"];
console.log(str);

//OUTPUT : [ 'A', 'E', 'I', 'O', 'U' ]
