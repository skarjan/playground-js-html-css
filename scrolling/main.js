const callBack = (entries) => {

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      console.log(entries[i].target.classList[1])
      entries[i].target.classList.toggle("red");
    }
  }
}

const observer = new IntersectionObserver(callBack);

const targets = document.querySelectorAll(".round-box");


for (let i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}

const isInView = (element) => {
    element.classList
}