const fs= require('fs').promises;
const handleHard= require('./hard');
const handleMedium=require('./medium');
const handleEasy=require('./easy');

const { json } = require('stream/consumers');
const r1=require('./input');

async function playAgainfunc(diff){
    if (diff === 1 || diff === 2 || diff === 3 || diff===4){
                playAgain=await r1.question('Do you want to play again?(y/n) :');
                    if (playAgain==='y'){
                        console.log("Starting New Game!\n");
                        return "y";
                    }else{
                       return "n";
                    }
            }
}
console.log("Welcome to the Number Guessing game!");
var playAgain="y";
async function guessingGame(){
    while(playAgain=="y"){
        var diff =await r1.question('\nI am guessing a number between 1 and 100.\nChoose your difficu;ty\n1.Easy (10 attempts)\n2.Medium (5 attempts)\n3.Hard (3 attempts).\n4.High scores\n5.Exit\nMode: ');
            diff=  Number(diff);
        switch (diff){
                case 1:
                    await handleEasy.easyMode();
                    playagain=await playAgainfunc(diff);
                    break;
                case 2:
                    await handleMedium.mediumMode();
                    playagain=await playAgainfunc(diff);
                    break;
                case 3:
                    await handleHard.hardMode();
                    playagain=await playAgainfunc(diff);
                    break;
                case 4:
                    try{
                        const data = await fs.readFile('score.json');
                        const jsondata= JSON.parse(data);
                        console.log(jsondata);
                    }catch(err){
                        console.log("no Scores yet!!")
                    }
                    playagain=await playAgainfunc(diff);
                    break;
                case 5:
                    playAgain='n';
                    break;
                default:
                    console.log('Wrong input!!!');
                    playAgain='n';
                    break;
            }
           
            

        } r1.close();
}

guessingGame();