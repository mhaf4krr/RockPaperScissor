

const options=['ROCK','PAPER','SCISSOR'];


/* Score Cards*/
let userScore=0;
let pcScore=0;



/* Initial Sound */
const sound=document.querySelector('#game-event-sound');
sound.setAttribute('src','walsawalsa.m4a');
sound.play();


/*  DOM SELECTORS*/
const winTime=document.querySelector('.win');
const loseTime=document.querySelector('.lose');
let playerScore=document.querySelector('.score-player');
let computerScore=document.querySelector('.score-computer');
const computerChoiceShow=document.querySelector('.button-select-computer');
const userChoiceShow=document.querySelector('.button-select-user');
const clickSound=document.querySelector('#click-sound');
clickSound.setAttribute('src','tink.wav');
react=document.querySelector('#reaction');




/* Event Listeners */

let buttons=document.querySelectorAll('.button-event');
for(let i=0;i<buttons.length;i++)
{
buttons[i].addEventListener('click',function(){

clickSound.play();
let userChoice=options[i];
playgame(userChoice);
   
});
}





/* Genereate Random PC Option */

function generateRandomOption(){
   
   let i=Math.floor(Math.random()*2);
   return options[i];
}



/*Main Game Runner*/
function playgame(input)
{
pcChoice=generateRandomOption();

userChoiceShow.textContent=`${input}`;
computerChoiceShow.textContent=`${pcChoice}`;

console.log('user :'+input);
console.log('pc :'+pcChoice);



if(input==='ROCK')
{
   if(pcChoice==='PAPER')
   {
      console.log('User Lost');
      playerLose();
     
      
   }

   else if(pcChoice==='SCISSOR')
   {
      console.log('User won');
      playerWin();
         
   }

   else if(pcChoice===input)
   {
      console.log('It was a Draw');
      draw();
      sound.setAttribute('src','draw/draw.m4a');
   }
}


if(input=== 'PAPER')
{
   if(pcChoice==='SCISSOR')
   {
      console.log('User Lost');
      playerLose();
      
   }

   else if(pcChoice==='ROCK')
   {
      console.log('User won');
      playerWin();
      
   }

   else if(pcChoice===input)
   {
      console.log('It was a Draw');
      draw();
      sound.setAttribute('src','draw.m4a');
   }
}

if(input==='SCISSOR')
{
   if(pcChoice==='ROCK')
   {
      console.log('User Lost');
      playerLose();
      
   }

   else if(pcChoice==='PAPER')
   {
      console.log('User won');
      playerWin();
     
   }

   else if(pcChoice===input)
   {
      console.log('It was a Draw');
      draw();
      sound.setAttribute('src','draw.m4a');
   }
}
}


/* Declare Player Win*/
function playerWin()
{
   winTime.style.background='rgb(131, 246, 131)';
   winTime.style.color='black';
   sound.setAttribute('src','(win)roshnikikiran.m4a');
   
   /*Gif Screen*/
   randomWinPic();
   
   sound.play();
   userScore++;
   playerScore.textContent=`0${userScore}`;   
   setTimeout(function(){
      winTime.style.background='green';
      winTime.style.color='white';
      
   },1000);
}

/*Declare Pc Win*/
function playerLose()
{
   loseTime.style.background='hsl(0, 97%, 76%)';
   loseTime.style.color='black';
   sound.setAttribute('src','lost.m4a');
   randomLosePic();
   sound.play();
   pcScore++;
   computerScore.textContent=`0${pcScore}`;   
   

   /*reset portion*/
      setTimeout(function(){
      loseTime.style.background='red';
      loseTime.style.color='white';
      
   },1000);
}



/* Draw Case*/
function draw()
{
react.setAttribute('src','draw/draw1.mp4');
userChoiceShow.textContent=`Draw`;
computerChoiceShow.textContent=`Draw`;
console.log("here");
console.log(sound);
sound.setAttribute('src','draw.m4a');
setTimeout(function(){
   sound.play();
},1200);
 
}

/* Generate Random Gif*/
function randomGIF()
{
let i=Math.floor(Math.random()*3+1);
return i;
}


function randomWinPic()
{
   switch(randomGIF())
   {
      case 1:react.setAttribute('src','win/win1.mp4');
      break;
      case 2:react.setAttribute('src','win/footballwin.mp4');
      break;
      case 3:react.setAttribute('src','win/girlywin.mp4');
   }
}

function randomLosePic()
{
   switch(randomGIF())
   {
      case 1:react.setAttribute('src','lose/lose1.mp4');
      break;
      case 2:react.setAttribute('src','lose/lose2.mp4');
      break;
      case 3:react.setAttribute('src','lose/lose3.mp4');
   }

}