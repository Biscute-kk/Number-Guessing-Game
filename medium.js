const fss= require('fs');
const r1=require('./input');


function randomNumber(){
    return Math.floor(Math.random()*99)+1;
}
async function mediumMode(){        
            console.log("Great! You have selected the Medium difficulty level.\nLet's start the game!"); 
            const randomNum= randomNumber();
            var guessCount=0;
            var result=false;
            const start= Date.now();
            console.log(`\nmy guess was ${randomNum}`)  
            while (guessCount<5){
                
                var val= await r1.question(`\nGuess ${guessCount+1} :`);
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
                var timetaken=(end-start)*0.001;
                timetaken=Number(timetaken.toFixed(3));
                console.log(`Time taken: ${timetaken} sec`);
                //high score
                fss.readFile('score.json',(err,data)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    let jsondata;
                    try{
                        jsondata=JSON.parse(data);
                    }catch(err){
                        jsondata={};
                    }
                    const scoreValue= {timetaken: timetaken, guessCount:guessCount+1};
                    jsondata.Medium??=[];
                    jsondata.Medium.push(scoreValue);
                    jsondata.Medium= jsondata.Medium.sort((a,b)=>a.guessCount-b.guessCount || a.timetaken-b.timetaken).slice(0,5); // sorts and keeps only top five score
                //Above line is similar to this
                    // jsondata.Medium.sort((a,b)=>{
                    //     if (a.guessCount!==b.guessCount){
                    //         return a.guessCount-b.guessCount;
                    //     } 
                    //     return a.timetaken-b.timetaken;
                    // }     
                    // );

                    fss.writeFile('score.json',
                    JSON.stringify(jsondata,null,2),
                    (err)=>{
                        if(err){
                        console.log(err);
                        return;
                    }else{ }
                })              
                })
            }else{
                console.log(`\nmy guess was ${randomNum}`);
            }

}

module.exports= {mediumMode};