import Saucer from './saucer';
import Shoot from './shoot';
import StarShip from './starShip';


export default class Game {
    constructor(canvas){
        this.canvas = canvas; 
        this.context = canvas.getContext("2d");
        this.startShip = new StarShip(40,this.canvas.height/2);
        this.saucers = new Array();
        this.shoots = new Array();
        this.score = 0;
        this.raf = null;
        this.interval =null;
        this.infScaucers = false; 
    }

    moveAndDraw(){
        const score = document.getElementById("score");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.shoots.filter(element=>!element.inGame).forEach((element=>{
            this.score+=200;
            score.innerHTML = this.score;
        }));
        this.saucers.filter(element=>element.x==16).forEach(element=>{
            this.score -=1000;
            score.innerHTML = this.score;
        });
        this.saucers = this.saucers.filter(element=>element.inGame);
        this.shoots = this.shoots.filter(element=>element.inGame);
        this.shoots.forEach(element=>{
            element.draw(this.context);
            element.colistionSaucer(this.saucers);
            element.moveShoot(this.canvas);
        })
        this.saucers.forEach(element =>{
            element.draw(this.context);
            element.moveSaucer();
        })
       
        this.startShip.draw(this.context);
        this.startShip.moveShip();
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    start(){
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.startShip.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.startShip.moveDown();
                break;
            default: return;
        }
        event.preventDefault();
     }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.startShip.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }

    keySpaceActionHandler(event) {
        console.log("espace success")
        switch(event.key) {
            case " ":
                let shoot = new Shoot(this.startShip.x,this.startShip.y);
                this.shoots.push(shoot);

        }
    }
    
   
    alea(m,M) {
        return Math.floor((Math.random()*(M-m)))+m;
      }
   
    
    

    createSaucer(){
        console.log("create saucer");
        let s = new Saucer(this.canvas.width,this.alea(0,this.canvas.height-30));
        this.saucers.push(s);
        document.activeElement.blur();
    }


    createInfSaucer(){
        let res = this.alea(0,2);
        console.log(res);
        if (res==0){
            this.createSaucer();
        }
    }

    flotteSoucoupes(){
        this.infScaucers = !this.infScaucers;
        if(this.infScaucers){
            this.interval = window.setInterval(this.createInfSaucer.bind(this),750);
        }
        else{
            window.clearInterval(this.interval);
            this.interval=null;
        }
    }


}

