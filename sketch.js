
let content = "p5js";

let pg;
let grid =22;

let pos=[];
let dotBool = true;

let colorBool = false;
let cnv;
let gridDiv;
let strokeCol;
let painter;

function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
  cnv.parent('sketchPad');
  pg = createGraphics(width,height);

  
  textField = createInput('input here');
 // textField.position(width,50);
  textField.size(250);
  textField.input(connect);
  textField.parent('textBox');
  textField.class('tBox');

  let div = createDiv('Grid');
  div.class('blockClass');
  div.id('gridID');
  div.parent('controls1');
 
  gridSlider= createSlider(10,100,15);
  gridSlider.style('width','150px');
//  gridSlider.position(width,100);
  gridSlider.changed(connect);
  gridSlider.parent('gridID');
  let gridDiv1 = createDiv('test');
  gridDiv1.id('gridValue');
  gridDiv1.parent('gridID');
 
  let Textdiv = createDiv('Scale');
  Textdiv.class('blockClass');
  Textdiv.id('scaleID');
  Textdiv.parent('controls1');
  textSlider= createSlider(50,500,200);
  textSlider.style('width','150px');

//  textSlider.position(width,130);
textSlider.changed(connect);
textSlider.parent('scaleID');
let textDiv1 = createDiv('test');
textDiv1.id('scaleValue');
textDiv1.parent('scaleID');
  


let distDiv = createDiv('Threshold');
distDiv.class('blockClass');
distDiv.id('distID');
distDiv.parent('controls1');
distSlider= createSlider(10,75,34);
distSlider.style('width','150px');
 // distSlider.position(width,160);
distSlider.changed(connect);
distSlider.parent('distID');

let distDiv1 = createDiv('test');
distDiv1.id('distValue');
distDiv1.parent('distID');
    
  let strokeDiv = createDiv('Weight');
  strokeDiv.class('blockClass');
  strokeDiv.id('strokeID');
  strokeDiv.parent('controls1');
  strokeSlider= createSlider(1,50,3);
  strokeSlider.style('width','150px');
 // strokeSlider.position(width,190);
 strokeSlider.changed(connect);
  strokeSlider.parent('strokeID');
  
  let strokeDiv1 = createDiv('test');
  strokeDiv1.id('strokeValue');
  strokeDiv1.parent('strokeID');


 let colorDiv = createDiv('');
 colorDiv.class('blockClass');
 colorDiv.id('clrID');
 colorDiv.parent('controls1');

 selector = createSelect();
 
 selector.option('Solid');
  selector.option('Random');
 
 selector.changed(connect);
 selector.parent('clrID');
 selector.class('dropsel');


colorPicker2 = createColorPicker('#000000');
colorPicker2.id('bColorID');
colorPicker2.parent('clrID');
colorPicker2.changed(connect);
colorPicker2.class('colorBox');


colorPicker = createColorPicker('#FF6C0A');
colorPicker.id('colorID');
colorPicker.parent('clrID');
colorPicker.changed(connect);
colorPicker.class('colorBox');

colorPicker1 = createColorPicker('#ed225d');
colorPicker1.id('colorID1');
colorPicker1.parent('clrID');
colorPicker1.style('display','none');
colorPicker1.changed(connect);
colorPicker1.class('colorBox');


    let dotDiv = createDiv('');
    dotDiv.class('blockClass');
    dotDiv.id('dotID');
      dotDiv.parent('controls1');
   
     dotbox = createCheckbox(' Dots', true);
     dotbox.class('dotClass');
     //dotbox.position(width,260);
     dotbox.changed(dotBoolCheck);
     dotbox.parent('dotID');
    // dotbox.class('button');
  saveButton = createButton("save");
  saveButton.class('button');
  //saveButton.position(width,height-100);
  saveButton.mousePressed(saveSketch);
  saveButton.parent('controls1');

  connect();

}

function connect(){

  background(colorPicker2.color());
  content = textField.value();
  painter = selector.value();

  pos=[];
  grid = gridSlider.value();
  document.getElementById('gridValue').innerHTML = grid;
  document.getElementById('scaleValue').innerHTML = textSlider.value();

  document.getElementById('distValue').innerHTML = distSlider.value();
  document.getElementById('strokeValue').innerHTML = strokeSlider.value();
  if(painter==="Random"){
    document.getElementById('colorID').style.display = 'none';
    document.getElementById('colorID1').style.display = 'none';
      }else if (painter==="Solid"){
        document.getElementById('colorID').style.display = 'block';
    
      }
  
  pg.background(0);
  pg.textSize(textSlider.value());
  pg.fill(255);
  pg.noStroke();
  pg.textAlign(CENTER);
  pg.text(content,pg.width/2,pg.height/2);
  
  
  for(var i=0;i<pg.width;i+=grid){
   for(var j=0;j<pg.height;j+=grid){
    
         var col = pg.get(i,j);
    
         if(brightness(col)>80){
       pos.push(createVector(i,j));           
        }     
    
  }
  }
  
  // pg.pop();
 
  
    for(let i=0;i<pos.length;i++){
          for(let j=0;j<pos.length;j++){

            
               stroke(255);
           strokeWeight(4);   
  //  noStroke();
  //  fill(255);       
          if(dotBool){
             
         //   ellipse(pos[i].x,pos[i].y,strokeSlider.value()*.15,strokeSlider.value()*.15);    
     point(pos[i].x,pos[i].y);
                 }
            
let d = dist(pos[i].x,pos[i].y,pos[j].x,pos[j].y);
            
            
      if(d<distSlider.value()){  
        
        if(painter==="Random"){
          strokeCol= color(random(255),random(255),random(255),random(255));
           }else   if(painter==="Solid"){
             
            strokeCol = colorPicker.color();
           }
console.log(strokeCol);
           stroke(strokeCol);
           strokeWeight(strokeSlider.value()*.25);  


      // line(pos[i].x,pos[i].y,pos[j].x,pos[j].y); 
        
   noFill();     
        
        bezier(pos[i].x,pos[i].y,(pos[i].x+pos[j].x)/2,(pos[i].y+pos[j].y)/2,(pos[i].x+pos[j].x)/2,(pos[i].y+pos[j].y)/2,pos[j].x,pos[j].y); 
       
  //      arc((pos[i].x+pos[j].x)/2,(pos[i].y+pos[j].y)/2,d,d,-PI/2,PI/2);
               
          }
   
    }
  }
  
  
}


function dotBoolCheck(){
  
  dotBool =!dotBool;
  connect();
}

function colorBoolCheck(){
  
  colorBool =!colorBool;

  
  connect();
}



function saveSketch() {
  let name = "W O V E _"+hour()+minute()+second()+".png";
  save(name);
  
}

function windowResized() {
  

   cnv= resizeCanvas(windowWidth, windowHeight);
   pg= null;
   pg = createGraphics(width,height);

   connect();
  }

  function gotoweb() {
    window.open('https://patternseeing.wordpress.com/');
  }
  
  
  