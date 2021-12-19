const root = document.querySelector("#root");
const target = document.querySelector("#target"); // aka Oriol
const output = document.querySelector("#output pre");
const ratioNum = document.querySelector("#ratioNum pre");
const options = {
  root: root,
  rootMargin: "0px",
  threshold: [...Array(100).keys()].map((x) => x / 100),
};

function io_callback(entries) {
  const ratio = entries[0].intersectionRatio;
  const boundingRect = entries[0].boundingClientRect;
  const intersectionRect = entries[0].intersectionRect;

  console.log({
    boundingRectTop: entries[0].boundingClientRect.top,
    intersectionRectTop: entries[0].intersectionRect.top,
  });

  ratioNum.innerText = ratio;
  if (ratio === 0) {
    output.innerText = "outside :(";
  } else if (ratio < 1) {
    if (boundingRect.top < intersectionRect.top) {
      output.innerText = "on the top";
    } else {
      output.innerText = "on the bottom";
    }
  } else {
    output.innerText = "inside :)";
  }
}

const observer = new IntersectionObserver(io_callback, options);
observer.observe(target);
