/////////// W O V E /////////////////
///// patternseeing | 2022  /////////


let content = "";

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

  uiElements();

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
  
  
  