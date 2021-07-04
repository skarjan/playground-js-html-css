const trace = (msg) => {
  return console.log(msg);
}

// https://entitycode.com/
let pre = document.getElementsByTagName("pre");
let preSplit = pre[0].innerHTML.split("\n");

let classAttrReg = /#([\w]+)#/
let classAttrSpan =   `<span class="code--html--class">$1</span>`

let propNameReg = /\^[\w\W\s]+\^/
let propNameSpan = `<span class="code--html--class--name">$&</span>`

let doubleQuotesReg = /\^/gm;

let LtAndGtReg = /(^!)([\w\W\s]+)(!!$)/;
let LtAndGtSpan = `&lt;$2</span>&gt;`;

let HTMLElementReg = /(&lt;)\/*(div)/
let HTMLElementSpan = `$1<span class="code--html">$2</span>`


// style class attribute
for (let i = 0; i < preSplit.length; i++) {
  if (propNameReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(propNameReg, propNameSpan);
  }
  if (LtAndGtReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(LtAndGtReg, LtAndGtSpan);
  }
  if (HTMLElementReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(HTMLElementReg, HTMLElementSpan);
  }
  if (classAttrReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(classAttrReg, classAttrSpan);
  }
  if (doubleQuotesReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(doubleQuotesReg, "\"");
  }
}
trace(preSplit);  


pre[0].innerHTML=preSplit.join("\n");







// let classSelect = /(class)(=)("[\w]*")/g
// let classSelectSpan=   `<span class="code--html--class">$1</span>$2<span class="code--html--class--content">$3</span>`;




