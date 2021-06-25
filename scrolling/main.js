function isState(entries, state, index) {

  if (entries[index].target.classList.length > 0) {

    for (let i = 0; i < entries[index].target.classList.length; i++) {

      if (entries[index].target.classList[i] === state) {

        console.log(true);
        return true;
      }
    }
  }
}


function isOffset(entries, index) {

  isState(entries, "offset", index)
}

const callBack = (entries) => {

  for (let i = 0; i < entries.length; i++) {

    console.log(entries[i].intersectionRatio);
    if (entries[i].intersectionRatio > 1) {

      entries[i].target.classList.remove("offset");
      entries[i].target.classList.add("onset");
    }
  }

  // console.log(entries[i].target.classList);
}


let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1
};
const observer = new IntersectionObserver(callBack, options);

const targets = document.querySelectorAll(".offset");


for (let i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}

