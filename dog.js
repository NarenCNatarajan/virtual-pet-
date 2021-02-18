class Doggo{
    constructor(x,y,width,height,options){
        options={
            "isStatic":true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dogImg.png")
        this.Happyimage = loadImage("dogImg1.png")
        
    }
    display(){
        var dog1 = this.image
        dog1;
        image(this.image, this.body.position.x, this.body.position.y, 300, 300)
  if (keyWentDown(UP_ARROW)){
    
    image(this.Happyimage, this.body.position.x, this.body.position.y, 300, 300)
    this.Happyimage.velocityX = 100
   
}

    }
}