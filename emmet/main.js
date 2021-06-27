// https://entitycode.com/

let p = document.getElementsByTagName("pre");
let a = "23asaS"
let b = "&qwe4;"
// should return a match if starts with '&', 
// ends on ';' and has 0 or more characters in between
let isCodeIdentity = /^&[\w\W]*;$/gm;

console.log(isCodeIdentity.test(b));
console.log(isCodeIdentity.test(a));