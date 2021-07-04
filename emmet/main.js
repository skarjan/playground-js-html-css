const trace = (msg) => {
  return console.log(msg);
}

// https://entitycode.com/
let pre = document.getElementsByTagName("pre");
let preSplit = pre[0].innerHTML.split("\n");




lessThen = `&lt;`
greaterThen = `&gt;`

let classAttrReg = /(\s)(class)(=)/gm;
let classAttrSpan =   `$1<span class="code--html--class">$2</span>$3`;

let classNameReg = /(\^)([\w\W\s]+)(\^)/
let classNameSpan = `$2`

let doubleQuotesReg = /\^/gm;

let HTMLTagsReg = /(^!)([\w\W\s]+)(!!$)/;
let HTMLTagsSpan = `&lt;$2</span>&gt;`;

let HTMLElementReg = /(&lt;)\/*(div)/
let HTMLElementSpan = `$1<span class="code--html">$2</span>`


// style class attribute
for (let i = 0; i < preSplit.length; i++) {
  if (classNameReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(classNameReg, classNameSpan);
  }
  if (classAttrReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(classAttrReg, classAttrSpan);
  }
  if (doubleQuotesReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(doubleQuotesReg, "\"");
  }
  if (HTMLTagsReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(HTMLTagsReg, HTMLTagsSpan);
  }
  if (HTMLElementReg.test(preSplit[i])) {
    preSplit[i] = preSplit[i].replace(HTMLElementReg, HTMLElementSpan);
  }
}

pre[0].innerHTML=preSplit.join("\n");







// let classSelect = /(class)(=)("[\w]*")/g
// let classSelectSpan=   `<span class="code--html--class">$1</span>$2<span class="code--html--class--content">$3</span>`;




