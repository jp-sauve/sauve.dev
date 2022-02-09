const canvW = 1000;
const canvH = 1000;
let loc = [500, 500];
let scalerW = canvW * 5 - 0;
let scalerH = canvH * 5 - 0;
function setup() {
  createCanvas(canvW, canvH);
  background(0,0,0)
}

function draw() {
  let r = (Math.floor(Math.random() * 3 + 1) * 32) + Math.floor(Math.random() * 128);
  if (r > 255) console.log(r)
  let g = Math.floor(Math.random() * 3 + 1) * 32 + Math.floor(Math.random() * 128);
  let b = Math.floor(Math.random() * 3 + 1) * 32 + Math.floor(Math.random() * 128);

  let newcolor = color(r, g, b);

  //let mouseScaleX = movedX;
  let mouseScaleX = 0;
  // let mouseScaleY = movedY;
  let mouseScaleY = 0;
  let right = Math.floor(Math.random() * 2 < 1);
  let oneOf = Math.floor(Math.random() * 2);
  let initialSteps = Math.floor(Math.random() * 10);
  if (!oneOf) {
    let constrainW = 1 + ((loc[0] - 0) / scalerW - 0.1);
    console.log(constrainW)
    loc[0] = right ? (loc[0] += (initialSteps * (constrainW))) : loc[0] -= (initialSteps);
  } else {
    let constrainH = 1 + ((loc[1] - 0) / scalerH - 0.1);
    loc[1] = right ? (loc[1] += (initialSteps * (constrainH))) + mouseScaleY : loc[1] -= initialSteps;
  }
  //point(...loc.reverse())
  strokeWeight(1)
  stroke(newcolor)
  point(...loc)
}
