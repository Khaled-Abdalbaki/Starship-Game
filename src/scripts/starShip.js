import MoveState from './moveState';
import Mobile from './mobile.js';

import IMAGE_LOCATION  from '../assets/images/vaisseau-ballon-petit.png';

export default class StarShip extends Mobile{

    
    static HEIGHT_CANVAS = 475;

    constructor(x,y){
        super(x,y,IMAGE_LOCATION,0,8)
        this.move = MoveState.IMMOBILE;
    }

    movingUp(){
        if (this.move == MoveState.UP)
            return true;
        else
            return false;
    }
    movingDown(){
        if(this.move == MoveState.DOWN )
            return true;
        else 
            return false;
    }

    moveUp(){
        this.deltaY = -8;
        this.move = MoveState.UP;
    }

    moveDown(){
        this.deltaY = +8;
        this.move = MoveState.DOWN;
    }

    stopMoving(){
        this.move = MoveState.IMMOBILE;
    }

    moveShip(){
        if(this.move == MoveState.UP){
            this.y = Math.max(0,this.y+this.deltaY);
        }
        if(this.move == MoveState.DOWN){
            this.y = Math.min(StarShip.HEIGHT_CANVAS-113,this.y+this.deltaY);
        }
        
    }

}