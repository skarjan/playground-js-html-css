const trace = (msg) => {
  return console.log(msg);
}

// https://entitycode.com/
let pre = document.getElementsByTagName("pre");

// let isCodeIdentity = /^&[\w\W]*;$/gm;
let groupCI = /^&[\w]+;([\w\W]+)&[\w]+;$/


let div =  /div/gm;
let htmlTagSpan =   `<span class="code--html">$&</span>`

trace(pre[0].innerHTML.replace(div,htmlTagSpan));
 pre[0].innerHTML = pre[0].innerHTML.replace(div,htmlTagSpan);