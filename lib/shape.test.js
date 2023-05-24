const { Shape, Circle, Triangle, Square } = require("./shape");

describe("Shape classes", () => {

  test("Shape should set color", () => {
    const shape = new Shape();
    shape.setColor("red");
    expect(shape.color).toEqual("red");
  });

  test("Circle should render a circle element", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
  })

  test("Triangle should render a polygon element", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`); 
  });

  test("Square should render a rectangle element", () => {
    const square = new Square();
    square.setColor("red");
    expect(square.render()).toEqual(`<rect width="200" height="200" fill="red" />`);
  });

});
