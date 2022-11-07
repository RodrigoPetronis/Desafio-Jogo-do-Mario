const mario = document.querySelector(".super-mario")
const pipe = document.querySelector(".pipe-game")    

const jump = () => {
    mario.classList.remove("super-mario");
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
        mario.classList.add("super-mario");
    }, 500);
};

const loopGame = setInterval(() =>{

    const pipePosition = pipe.offsetleft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px","");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
    
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.scr = "mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginleft = "45px";

        clearInterval(loopGame);
    }
        
},10)

document.addEventListener("keydown",jump);
