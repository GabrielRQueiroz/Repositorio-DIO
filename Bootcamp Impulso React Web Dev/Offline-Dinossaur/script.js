const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const scoreScreen = document.querySelector('.points');
const start = document.querySelector('.start');
start.classList.add('hidden'); 
let started = false;
let onGround = true;
let position = 39;


let score = 0;

let points = setInterval(() => {
   score += .2;
   scoreScreen.innerHTML = `Score: ${score.toFixed(0)} points`;
}, 10);

function handleKeyDown(event) {
   if (event.keyCode === 32 || event.keyCode === 38) {
      if (onGround) {
         jump();
      }
   }
}

function jump() {

   onGround = false;

   let upInterval = setInterval(() => {

      if (position >= 54) {
         clearInterval(upInterval);

         let downInterval = setInterval(() => {

            if (position <= 39) {
               clearInterval(downInterval);
               onGround = true;

            } else {
               position -= 15;
               dino.style.bottom = position + 'vh'

            }

         }, 100);

      } else {
         position += 15;
         dino.style.bottom = position + 'vh';

      }

   }, 100);

}

function createCactus() {

   const cactus = document.createElement('div');
   let cactusPosition = 110;
   let randomTime = (Math.random() + 5) ** 4;

   cactus.classList.add('cactus');
   cactus.style.left =  110 + "vw";
   
   background.appendChild(cactus);

   let leftInterval = setInterval(() => {

      if (cactusPosition < -10) {
         clearInterval(leftInterval);
         background.removeChild(cactus);
         
      } else if (cactusPosition > 0 && cactusPosition <= 5 && position <= 39) {
         clearInterval(leftInterval);
         clearInterval(points);
         document.body.innerHTML = `<div class="end"> <h2> Game over </h2> <p> You scored ${score.toFixed(0)} points </p> <p> (Say goodbye to Dino ;-;) </p> </div>`;

      } else {
         cactusPosition -= 5
         cactus.style.left = cactusPosition + "vw";

      }

   }, 50)

   setTimeout(createCactus, randomTime);

}

createCactus();

document.addEventListener('keydown', handleKeyDown);