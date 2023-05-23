const { Circle, Triangle, Square } = require("../lib/shape");

function generateLogo(answers) {
  console.log(answers);
  let shape;

  if (answers.shape === "circle") {
    shape = new Circle();
  } else if (answers.shape === "triangle") {
    shape = new Triangle();
  } else if (answers.shape === "square") {
    shape = new Square();
  }
  shape.setColor(answers.shapeColor);

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
`;
}

module.exports = generateLogo;
