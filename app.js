const fs= require('fs');
const readline= require('readline/promises');
const {stdin:input, stdout:output}=require('process');


const r1= readline.createInterface({
    input,
    output
});

// generate something
function randomNumber(){
    return Math.floor(Math.random()*99)+1;
}

async function guessingGame(){
var diff =await r1.question('Welcome!!!\nThis is a Number Guessing game.\nI am guessing a number between 1 and 100.\nChoose your difficu;ty\n1.Easy 10 attempts\n2.Medium 5 attempts\n3.Hard 3 attempts.\n4.Exit\nMode: ');
    diff=  Number(diff);
    console.log(diff);
   switch (diff){
        case 1:
            console.log('Easy Mode Activated.');
            
            r1.close();
            break;
        case 2:
            console.log('Medium Mode Activated.');

        
            r1.close();
            break;
        case 3:
            console.log('Hard Mode Activated.'); 
            const randomNum= randomNumber();
            var guessCount=0;
            var result=false;
            console.log(`\nmy guess was ${randomNum}`)  
            while (guessCount<3){
                 
                var val= await r1.question(`Guess ${guessCount+1} :`);
                val=Number(val);
                if (val===randomNum){
                    result=true;
                    
                    break;
                }else if(val<randomNum){
                    guessCount++;
                    console.log(`My Guess is greater than ${val}`);
                }else if(val>randomNum){
                    guessCount++;
                    console.log(`My Guess is Less than ${val}`);
                }else{
                    guessCount++;
                    console.log('please enter a number!');
                } 
            }
            if (result){
                console.log(`Yes ${randomNum} was what i was guessing, You guessed correct in ${guessCount+1} attempts`);
            }else{
                console.log(`\nmy guess was ${randomNum}`);
            }
            const playAgain=await r1.question('Do you want to play again?(y/n) :');
            if (playAgain==='y'){

            }
            r1.close();
            break;
        case 4:
            r1.close();
            break;
        default:
            console.log('Wrong input!!!');
            r1.close();
            break;
    }


}

guessingGame();