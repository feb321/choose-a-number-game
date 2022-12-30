`use strict`;

// console.log(document.querySelector('.message'));

// document.querySelector(`.message`).textContent = `Correct Number😍😍😍yaya!!`
// console.log(document.querySelector('.message').textContent);
// document.querySelector(`.score`).textContent= 15;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector('.guess').Value = 23;
// console.log(document.querySelector(`.guess`).Value);
let autonum = Math.trunc(Math.random()*20)+1;
let fail = 20;
let highscore = 0;
console.log(autonum);

document.querySelector(`.check`) .addEventListener(`click`,function(){
  const guess = Number(document.querySelector('.guess').value
  );
  console.log(guess);
  //when there is no number
if (!guess){
    document.querySelector(`.message`).textContent = 'there is no number😭😭😭';
     //when there is correct answer
}else if(guess === autonum){
    document.querySelector(`.number`).textContent = autonum;
    document.querySelector(`.message`).textContent = `guess was correct 🎉🎉🎉`
    //when the guess is larger than the atonum
    document.querySelector(`body`).style.backgroundColor = `#2db300`;
    if(fail > highscore){
        highscore = fail;
        document.querySelector(`.highscore`).textContent = highscore;
    }
}else if (guess > autonum){
    //checking the condition that the score is greater than zero
    if(fail>1){
      document.querySelector(`.message`).textContent = `number is too high😒😒`
    fail--;
    document.querySelector(`.score`).textContent = fail;  
    }else{
        document.querySelector(`.message`).textContent = `you loose the game`
    }  
}else if(guess < autonum){
    //when the guess number is smaller than the autonum
    if(fail>1){
     //checking the condition that the score is greater than zero
        document.querySelector(`.message`).textContent = `number is too low😒😒`
        fail--;
        document.querySelector(`.score`).textContent = fail;
    }else{
        document.querySelector(`.message`).textContent = `you loose the game`
    }
   
}

});
document. querySelector(`.again`).addEventListener(`click`,function(){
    fail = 20;
    autonum = Math.trunc(Math.random()*20)+1;
    console.log(autonum);
    document.querySelector(`.message`).textContent = `start guessing!!!`
    document.querySelector(`.score`).textContent = fail;
    document.querySelector(`.number`).textContent = `?`
    document.querySelector(`.guess`).value = '';
    document.querySelector(`body`).style.backgroundColor = `#222`;

})
