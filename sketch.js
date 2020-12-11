let rt = -205,
  cnt = 0,
  lt = -150;

  

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(22, 0, 5);
  translate(width / 2, height / 2);
  rotate(-90);
  mth = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let hr = hour();
  if (hr > 12) {
    hr = hr - 12;
    hr = nf(hr, [2], [0]);
  }
  let mn = minute();
  mn = nf(mn, [2], [0])
  let sc = second();
  sc = nf(sc, [2], [0])
  let d = day();
  d = nf(d, [2], [0])
  let m = month();
  let y = year();
  let mt = mth[m - 1];




  strokeWeight(8);
  stroke(255, 10, 10);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 10, 10);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);


  rotate(90)
  fill(1,15,250);
  noStroke();
  textFont('Georgia');
  textSize(50);
  textStyle(BOLD);
  // textAlign(CENTER);
  
  if (cnt >= 0 && cnt <= 200) {
    rt += .95;
    lt += -.65;
    cnt++
    
  } else if (cnt > 200 && cnt < 400) {
    rt -= .95;
    lt -= -.65;
    cnt++
  } else {
    cnt=0;
   
    
  }

  // rt = -200+ (sc * 4)
  // lt = 75 + (sc * -4)
  console.log(rt, lt, cnt);
  text(hr + ':' + mn + ':' + sc, rt, 10 + -250);
  text(d + 'th ' + mt + ' ' + y, lt, 10 + 250);



}