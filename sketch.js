const ExampleOne = (a) =>{
  a.setup = () =>{
    a.createCanvas(150, 90);
  }
  a.draw = () => {
    a.background('rgb(0,255,0)');
    a.ellipse(40,40,50,50)
    a.square(80,15,50)
  }
}
var myp5 = new p5(ExampleOne, 'c1')

//Example 2

const ExampleTwo = (b) => {
  b.setup = () =>{
    b.createCanvas(200,150);
  }
  b.draw = () => {
    b.noStroke();
    b.background(255);
    b.fill('rgba(255,0,0,0.30)');
    b.ellipse(100,50,80,80);
    b.fill('rgba(0,255,0,0.30)');
    b.ellipse(125,95,80,80);
    b.fill('rgba(0,0,255,0.30)');
    b.ellipse(75,95,80,80);
  }
}
var myp5 = new p5(ExampleTwo, 'c2')
//Example 3

const ExampleThree = (c) => {
  c.setup = () =>{
    c.createCanvas(170,100);
  }
  c.draw = () =>{
    c.angleMode(c.DEGREES)
    c.background(0);
    c.noStroke();
    c.fill('yellow');
    c.arc(50, 50, 50, 50, 220, 150);
    c.fill('red');
    c.ellipse(115,50,50,50)
    c.rect(90,45,50,30)
    c.fill('white')
    c.ellipse(127,50,15,15);
    c.ellipse(103,50,15,15);
    c.fill('blue')
    c.ellipse(127,50,9,9);
    c.ellipse(103,50,9,9);
  }
}
var myp5 = new p5(ExampleThree, 'c3')

const ExampleFour = (d) => {
  d.setup = () =>{
    d.createCanvas(200,200);
  }
  d.draw = () => {
    d.background('blue');
    d.stroke(255);
    d.strokeWeight(3);
    d.fill('green');
    d.ellipse(100,100,80,80);
    d.fill('red');
    d.translate(100,100);
    d.beginShape();
    d.vertex(0, -45);
    d.vertex(10, -15);
    d.vertex(40, -15);
    d.vertex(15, 7);
    d.vertex(25, 33);
    d.vertex(0, 15);
    d.vertex(-25, 33);
    d.vertex(-15, 7);
    d.vertex(-40, -15);
    d.vertex(-10, -15);
    d.endShape(d.CLOSE);
  }
}
var myp5 = new p5(ExampleFour, 'c4')