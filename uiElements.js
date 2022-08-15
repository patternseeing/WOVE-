/////////// W O V E /////////////////
///// patternseeing | 2022  /////////


function uiElements(){
    
  textField = createInput('WEAVE');
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
}