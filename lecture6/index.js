//string
let str="this is a string";
let newstr=str.replace("is","IS");
console.log(newstr);

newstr=str.replaceAll("is","in");
console.log(newstr);

console.log(str[5]);
console.log(str.charAt(5));

//important
console.log(str.startsWith("is"));//boolean
console.log(str.includes("ri"));
console.log(str.endsWith("ing"));
// let arr = str.split(" ")
let arr = str.split(" ")[0];
console.log(arr);