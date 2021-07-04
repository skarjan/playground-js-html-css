const trace = (msg) => {
  return console.log(msg);
}

// https://entitycode.com/
// class name code?
// code -> turn into pre tag with the tags in spans for colors
let p = document.getElementsByTagName("pre");
// should return a match if starts with '&', 
// ends on ';' and has 0 or more characters in between
let isCodeIdentity = /^&[\w\W]*;$/gm;
let groupCI = /^&[\w]+;([\w\W]+)&[\w]+;$/
let d =  /div/gm;
let e =   `<span class="code-tag">$&</span>`

trace(p[0].innerHTML.replace(d,e));
 p[0].innerHTML = p[0].innerHTML.replace(d,e);