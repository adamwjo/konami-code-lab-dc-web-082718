const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function init() {
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0


    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }

  });
}
// let index = 0
//
//
//
// function init() {
//   document.body.addEventListener("keydown",(event) => {
//     const key = event.key;
//
//     if (key === codes[index]) {
//       index++;
//
//       if (index === codes.length) {
//         window.alert("Hurray!");
//
//         index = 0;
//       }
//     }
//     else {
//       index = 0;
//     }
//   })
// }
