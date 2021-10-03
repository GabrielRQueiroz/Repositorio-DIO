const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const scoreScreen = document.querySelector('.points');
let onGround = true;
let position = 40;

let score = 0;

let points = setInterval(() => {
   score += .2;
   scoreScreen.innerHTML = `Score: ${score.toFixed(0)} points`;
}, 10);



function handleKeyUp(event) {
   if (event.keyCode === 32 || event.keyCode === 38) {
      if (onGround) {
         jump();
      }
   }
}

function jump() {

   onGround = false;

   let upInterval = setInterval(() => {

      if (position >= 55) {
         clearInterval(upInterval);

         let downInterval = setInterval(() => {

            if (position <= 40) {
               clearInterval(downInterval);
               onGround = true;

            } else {
               position -= 15;
               dino.style.bottom = position + 'vh'

            }

         }, 120);

      } else {
         position += 15;
         dino.style.bottom = position + 'vh';

      }

   }, 120);

}

function createCactus() {

   const cactus = document.createElement('div');
   let cactusPosition = 110;
   let randomTime = Math.random() * 4000;

   cactus.classList.add('cactus');
   cactus.style.left =  110 + "vw";
   
   background.appendChild(cactus);

   let leftInterval = setInterval(() => {

      if (cactusPosition < -10) {
         clearInterval(leftInterval);
         background.removeChild(cactus);
         
      } else if (cactusPosition > 0 && cactusPosition <= 10 && position < 45) { 
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

document.addEventListener('keydown', handleKeyUp);