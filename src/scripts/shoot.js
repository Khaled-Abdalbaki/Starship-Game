import Mobile from './mobile';
import IMAGE_LOCATION  from  '../assets/images/tir.png';


export default class Shoot extends Mobile{

        
    constructor(x,y){
        super(x,y,IMAGE_LOCATION,8,0);
        this.inGame=true;
    }

    colistion(mobile){
        if(this.x+32>mobile.x && this.x<mobile.x+48 && this.y > mobile.y && this.y <mobile.y+36)
            return true;
        return false;
    }

    colistionSaucer(saucer){
        saucer.forEach(element => {
            if(this.colistion(element) ){
                element.deltaX = 0;
                element.deltaY = 3;
                this.inGame=false;
                return element;
                
            }
                    });
    }

    moveShoot(canvas){
        if (this.x < 0){
            this.inGame = false;
        }
        this.x = this.x+this.deltaX;
        this.y = this.y + this.deltaY;
    }
    
}