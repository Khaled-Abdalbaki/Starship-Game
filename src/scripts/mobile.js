

export default class Mobile {

    constructor(x,y,imgLoc,deltaX=0,deltaY=0){
        this.x = x;
        this.y = y;
        this.img = this.createImage(imgLoc);
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }




    createImage(imgLoc){
        let image = new Image();
        image.src = imgLoc;
        return image;
    }

    draw(context){
        context.drawImage(this.img, this.x,this.y);  
    }

    move(){
        this.x = this.x + this.deltaX;
        this.y = this.y + this.deltaY;
    }
}