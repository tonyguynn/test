//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke(0,220,0,220);
  fill(127,10,200,255);
  ellipse(x, y, 60, 60);
  fill(127,100,200,255);
  ellipse(x-15, y-40, 15, 10); // blue oval small
  fill(70,130,255,200)
  ellipse (x+0, y+0, 30, 40) // blue oval medium
  fill(110,100,150,275);
  ellipse(x+0, y+0, 10, 10); // small middle circle
  fill(80,90,100,115);
  ellipse(x+40, y+35, 80, 70);
  fill(180,90,130,250);
  ellipse(x-15, y-155, 5, 5); //smallest circle
  fill(140,90,130,170);
  ellipse(x+50, y+70, 40, 40);


}

function setup() {
  createCanvas(800,800);
  background(255,90,90,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){

    for(var y=0;y<8;y++){
    FunnyFace(x*100,15+y*100);
    console.log("x:"+x+" y:"+y);
}
}
}
