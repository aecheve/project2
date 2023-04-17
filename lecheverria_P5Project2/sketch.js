var myFill;
var xpos;
var ypos;
var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myFill = color(0,255,0);
  background('#336699');    
  xpos = 0;
  ypos = 0;
  song = loadSound('assets/Quirky_Dog.mp3');

}



function draw() {
  background('#336699');    
  noStroke();
  fill(255)
  rect(280, 190, 200, 180 );
  fill('#202020');
  let lr = 'Press the LEFT or RIGHT arrow keys to change the color of the painting.';
  let mus = 'Press the ENTER key to play music. Press the SPACEBAR to stop it.'
  let musid = 'Song: Quirky Dog Kevin MacLeod Licensed under Creative Commons: By Attribution 4.0 License'
  text(lr, 290, 200, 190, 170); // Text wraps within text box
  text(mus, 290, 250, 190, 170);
  fill('#001a33')
  text(musid, 10, 700, 300, 200);
  rect(500+xpos, 100+ypos, 400, 550);
  fill(myFill);
  rect(525+xpos, 130+ypos, 350, 500);

  //blob
  fill('#003366')

  ellipse(700,250,250,200);
  rect(575,250,250,380);
  fill('#001a33')
  strokeWeight(4);
  //nose
  rect(675, 280, 40, 60);
  
  //eyebrows
  ellipse(650, 200, 60, 10);
  ellipse(750, 200, 60, 10);
// mouth
strokeWeight(8);
rect(645, 350, 100, 20);
//eyes
fill('#fafaf0')
let x1 = map(635+mouseX, 0, width, 600, 650, true);
let x2 = map(735+mouseX, 0, width, 700, 770, true);
ellipse(x1,250,50);
ellipse(x2,250,50);
//pupil
fill('#202020')
ellipse(x1,250,20,20);
ellipse(x2,250,20,20);
noFill();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  myFill = color(random(100),random(100),random(100),);
  }
  else if (keyCode === RIGHT_ARROW)
  {
    myFill = color(random(200),random(200),random(200),);

  }
  if (keyCode === ENTER){
  song.play();


} 
  else if (key == ' ')
  {
    song.stop();
  }
}



