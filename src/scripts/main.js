
// importation de l'instance de Game créée dans Game.js
import Game from './game.js';

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    const addSaucer = document.getElementById("nouvelleSoucoupe");
    const canvas  = document.getElementById("stars");
    const fScoupes = document.getElementById("flotteSoucoupes");
    const theGame= new Game(canvas);
    addSaucer.addEventListener('click',() => theGame.createSaucer() );
    theGame.start(); 
    window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
    window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
    window.addEventListener('keydown',theGame.keySpaceActionHandler.bind(theGame));
    fScoupes.addEventListener('click',() => theGame.flotteSoucoupes() );

    

    
}

window.addEventListener("load",init);


