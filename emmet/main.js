const trace = (msg) => {
  return console.log(msg);
}

// https://entitycode.com/
let pre = document.getElementsByTagName("pre");

// let isCodeIdentity = /^&[\w\W]*;$/gm;
let groupCI = /^&[\w]+;([\w\W]+)&[\w]+;$/


let divEl =  /div/gm;
let htmlTagSpan =   `<span class="code--html">$&</span>`;

let classSelect = /(class)(=)("[\w]*")/g
let classSelectSpan=   `<span class="code--html--class">$1</span>$2<span class="code--html--class--content">$3</span>`;




// style classes first, 
// because this function itself adds classes which would also be styled
// pre[0].innerHTML = pre[0].innerHTML.replace(classSelect,classSelectSpan);

// pre[0].innerHTML = pre[0].innerHTML.replace(divEl,htmlTagSpan);
pre[0].innerHTML = pre[0].innerHTML.replace(classSelect, classSelectSpan);
trace(pre[0].innerHTML);
// trace(pre[0].innerHTML.replace(divEl,htmlTagSpan));