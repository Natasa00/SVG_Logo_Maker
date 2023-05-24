const { Circle, Triangle, Square } = require("../lib/shape");
const { Text } = require("../lib/text");

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

  const text = new Text();
  text.setTextContent(answers.text);
  text.setColor(answers.textColor);

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  ${text.render()}

</svg>
`;
}

module.exports = generateLogo;
