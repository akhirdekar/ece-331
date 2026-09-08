let prevMinute = -1;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(40); 
  let h = hour();
  let m = minute();
  let s = second();

  if (m !== prevMinute) {
    console.log("Minute updated to: " + m);
    prevMinute = m;
  }

  let displayH = h % 12;
  if (displayH === 0) displayH = 12;

  let hWater = map(displayH, 0, 12, 0, 200);
  let mWater = map(m, 0, 60, 0, 200);
  let sWater = map(s, 0, 60, 0, 200);

  let secBlue = map(s, 0, 59, 255, 100);
  let groundY = 320; 
  let bucketW = 100;
  
  noStroke();

  fill(100, 200, 255); // Hours
  rect(100, groundY - hWater, bucketW, hWater);

  fill(100, 150, 255); // Minutes
  rect(250, groundY - mWater, bucketW, mWater);

  fill(50, 100, secBlue); // Seconds
  rect(400, groundY - sWater, bucketW, sWater);

  let ms = millis() % 1000;
  let dripY = map(ms, 0, 1000, 50, groundY - sWater);
  
  fill(50, 100, secBlue);
  circle(450, dripY, 15); 

  stroke(255, 150); 
  strokeWeight(4);
  noFill();
  
  rect(100, groundY - 200, bucketW, 200);
  rect(250, groundY - 200, bucketW, 200);
  rect(400, groundY - 200, bucketW, 200);
  line(0, groundY, width, groundY);

  for (let i = 1; i <= 4; i++) {
    let tickY = groundY - (i * 50);

    stroke(255, 150);
    strokeWeight(2);

    line(100, tickY, 110, tickY); // Hours
    line(250, tickY, 260, tickY); // Minutes
    line(400, tickY, 410, tickY); // Seconds

    noStroke();
    fill(200);
    textSize(12);

    let hourNum = i * 3;     // 3, 6, 9, 12
    let minSecNum = i * 15;  // 15, 30, 45, 60

    text(hourNum, 85, tickY);
    text(minSecNum, 230, tickY);
    text(minSecNum, 380, tickY);
  }
  noStroke();
  fill(255);
  textSize(45);
  textFont('Arial'); 
  
  let displayM = nf(m, 2);
  let displayS = nf(s, 2);

  text(displayH, 150, groundY - 100);
  text(displayM, 300, groundY - 100);
  text(displayS, 450, groundY - 100);

  textSize(16);
  fill(180);
  text("HOURS", 150, groundY + 30);
  text("MINUTES", 300, groundY + 30);
  text("SECONDS", 450, groundY + 30);
}