This project followed a code titled 'keyPressed Example by ehagan'. As a reference here is the code discussed below:

https://editor.p5js.org/ehagan/sketches/dlcBuy7NC

The following was borrowed from line 18 to 25:

function keyPressed(){
  if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
    aColor = "blue";
  }  
  else if (keyCode === ENTER){
    aColor = "red"; 
  }
}

I used this in my own code, but I changed a few things from this code and turned it into a different function. When the person presses the
enter key, music starts. When the person presses the space bar, the music will stop.