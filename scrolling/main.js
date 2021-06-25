const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("lone-ease");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".round-box");
targets.forEach(function(target) {
  observer.observe(target);
});
