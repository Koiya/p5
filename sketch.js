function setup() {
  createCanvas(400, 400);
}

//Example 1
/*
function draw() {
  background('rgb(0,255,0)');
  ellipse(50,50,50,50)
  square(100,25,50)
}*/

//Example 2
/*
function draw() {
  noStroke();
  background(255);
  fill('rgba(255,0,0,0.30)');
  ellipse(140,140,100,100);
  fill('rgba(0,255,0,0.30)');
  ellipse(170,200,100,100);
  fill('rgba(0,0,255,0.30)');
  ellipse(110,200,100,100);
}
*/
//Example 3
/*
function draw(){
  angleMode(DEGREES);
  background(0);
  noStroke();
  fill('yellow');
  arc(100, 100, 50, 50, 220, 150);
  fill('red');
  ellipse(200,100,50,50)
  rect(175,95,50,30)
  fill('white')
  ellipse(188,100,13,13);
  ellipse(212,100,13,13);
  fill('blue')
  ellipse(188,100,8,8);
  ellipse(212,100,8,8);

}*/
function draw(){
  background('blue');
  fill('white');
  noStroke();
  ellipse(100,100,80,80);
  star(100, 100, 20, 50, 5);
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}