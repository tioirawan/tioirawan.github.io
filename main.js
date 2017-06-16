var kar;
var kot = [];
var kotJum = 0;
var jumKot = 0;
var jumKar = 0;

window.onload = function(){
   alert("touch the canvas");
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   kar = new Karakter ();
   for(var i = 0;i < jumKot;i++){
         kot.push(new Kotak());
   }
}

function draw(){
    background(0,230,240, 13);
    //kar.update();
    //kar.draw();
    
   for(var i = 0;i < jumKot;i++){
      kot[i].show();
      if(kot[i].belok(kar.x, kar.y)){
         kar.changeDir();
      }
      //kot[i].checkGagal(kar.x, kar.y)
      if(kot[i].nabrakTembok()){
         kot.splice(i, 1);
         jumKot--;
      }
      //fill(0);
      //textSize(200);
      //text(jumKot, windowWidth/2, windowHeight/2);
   }
   
}

function mousePressed(){
    for(var i = 0;i < 20;i++){
       kot.push(new Kotak());
       jumKot++;
    }
}

function Karakter(){
   this.x = random(width);
   this.y = random(height);
   this.w = 8;
   this.h = 8;
   this.xdir = 1;
   this.ydir = 1;
   
   this.draw = function(){
       fill(255, 222, 212);
       ellipse(this.x, this.y, this.w, this.h);
   }
   
   this.changeDir = function(){
       if(this.xdir >= 0){
          this.xdir += random(-4, -0.1);
       }else{
          this.xdir += random(0.1, 4);
       }
       
       if(this.ydir >= 0){
          this.ydir += random(-4, -0.1);
       }else{
          this.ydir += random(0.1, 4);
       }
   }
   
   
   
   this.update = function(){
      this.x += this.xdir;
      this.y += this.ydir;
      
      this.xdir += random(-0.5, 3);
      this.xdir += random(-3, 0.5);
    
      if(this.x >= width-this.w){
         this.xdir += -1; 
      }
      if(this.x <= 0){
         this.xdir += 1; 
      }
      
      if(this.y >= height-this.w){
         this.ydir += -1; 
      }
      if(this.y <= 0){
         this.ydir += 1; 
      }
   }
}

function Kotak(){
   this.posX = mouseX;
   this.posY = mouseY;
   this.colorR = floor(random(255));
   this.colorG = floor(random(255));
   this.colorB = floor(random(255));
   this.mvX = random(-1, 1);
   this.mvY = random(-1, 1);
   this.la = 0;
   this.lu = random(240, 255);
   this.uv;
   //this.cou = floor(random(50, 150));
   
   
   this.show = function(){
      if(frameCount % floor(random(30,200)) == 0){
          // this.posX = random(width);
           //this.posY = random(height);
           this.la = 0;
           
      }
      if(this.la <= 50){
          this.mvX += random(-0.5, 0.5)+random(-this.la/9, this.la/9);
          this.mvY += random(-0.5, 0.5)+random(-this.la/9, this.la/9);
          this.la++;
      }
      
      if(this.posX >= width-10){
         this.mvX = -4; 
         this.la = 0;
      }
      if(this.posX <= 0){
         this.mvX = 4; 
         this.la = 0;
      }
      
      if(this.posY >= height-10){
         this.mvY = -4; 
         this.la = 0;
      }
      if(this.posY <= 0){
         this.mvY = 4; 
         this.la = 0;
      }
      
      this.posX += this.mvX;
      this.posY += this.mvY;
      fill(this.colorR,this.colorG, this.colorB, this.lu);
      noStroke();
      ellipse(this.posX, this.posY, 10, 10);
      //text(this.lu, this.posX, this.posY);
      
   }
   
   this.nabrakTembok = function(){
     // if(this.posX >= width || this.posX <= 0 || this.posY >= height || this.posY <= 0)
     if(this.lu < 0){
         return true;
      }
      this.lu--;
   }
   
   this.belok = function (karx , kary){
      if(kary+kar.h >= this.posY-kar.h && kary <= this.posY+kar.h+10){
          if(karx+kar.w >= this.posX-kar.w && karx <= this.posX+kar.w+10){
             return true; 
          }
      }
      return false;
   }
   
   this.checkGagal = function (karx , kary){
      if(kary+kar.h >= this.posY && kary <= this.posY+kar.h){
          if(karx+kar.w >= this.posX && karx <= this.posX+kar.w){
             this.colorR = floor(random(255));
             this.colorG = floor(random(255));
             this.colorB = floor(random(255));
             this.posX = 0;
             this.posY = 0;
             return true; 
          }
      }
      return false;
   }
}