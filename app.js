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
console.log("Welcome to the Number Guessing game!");
var playAgain="y";
async function guessingGame(){
    while(playAgain=="y"){
        var diff =await r1.question('\nI am guessing a number between 1 and 100.\nChoose your difficu;ty\n1.Easy (10 attempts)\n2.Medium (5 attempts)\n3.Hard (3 attempts).\n4.Exit\nMode: ');
            diff=  Number(diff);
            console.log(diff);
        switch (diff){
                case 1:
                    console.log("Great! You have selected the Easy difficulty level.\nLet's start the game!");
                    

                    break;
                case 2:
                    console.log("Great! You have selected the Medium difficulty level.\nLet's start the game!");

                

                    break;
                case 3:
                    console.log("Great! You have selected the Hard difficulty level.\nLet's start the game!"); 
                    const randomNum= randomNumber();
                    var guessCount=0;
                    var result=false;
                    const start= Date.now();
                    console.log(`\nmy guess was ${randomNum}`)  
                    while (guessCount<3){
                        
                        var val= await r1.question(`Guess ${guessCount+1} :`);
                        val=Number(val);
                        if (val===randomNum){
                            result=true;
                            break;
                        }else if(val<randomNum){
                            guessCount++;
                            console.log(`Incorrect!! The Number is greater than ${val}`);
                        }else if(val>randomNum){
                            guessCount++;
                            console.log(`Incorrect!! The Number is Less than ${val}`);
                        }else{
                            guessCount++;
                            console.log('Please enter a number!');
                        } 
                    }
                    if (result){
                        console.log(`Congratulations! You guessed the correct number in ${guessCount+1} attempts`);
                        const end= Date.now();
                        const timetaken=(end-start)*0.001;
                        console.log(`Time taken: ${timetaken} sec`);
                        //high score
                        fs.readFile('score.json',(err,data)=>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            const jsondata=JSON.parse(data);
                            if (jsondata.Hard.timetaken>timetaken){
                                
                                jsondata.Hard={timetaken: timetaken, guessCount:guessCount+1}
                                fs.writeFile('score.json',
                                JSON.stringify(jsondata,null,2),
                                (err)=>{
                                    if(err){
                                    console.log(err);
                                    return;
                                }else{

                                }
                        })
                            }
                            
                        })
                    }else{
                        console.log(`\nmy guess was ${randomNum}`);
                    }
                    break;
                case 4:
                    playAgain='n';

                    break;
                default:
                    console.log('Wrong input!!!');
                    playAgain='n';

                    break;
            }
            if (diff === 1 || diff === 2 || diff === 3){
                playAgain=await r1.question('Do you want to play again?(y/n) :');
                    if (playAgain==='y'){
                        console.log("Starting New Game!\n");
                    }else{
                        break;
                    }
            }
            

        } r1.close();
}

guessingGame();