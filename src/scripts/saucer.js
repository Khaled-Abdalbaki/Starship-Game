import Mobile from './mobile';
import IMAGE_LOCATION  from  '../assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile{
    
    static HEIGHT_CANVAS = 475;

    constructor(x,y){
        super(x,y,IMAGE_LOCATION,-3,0)
        this.inGame = true;
    }

    moveSaucer(){
        if (this.x <= 20){
            this.inGame = false;
        }
        this.x = this.x+this.deltaX;
        this.y = this.y + this.deltaY;
    }

    saucerInGame(){
        return this.inGame;
    }

    


}

