let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget =()=>{
 let newSecretTargetNumber = Math.floor(Math.random()* 9)
  return newSecretTargetNumber;
}
// console.log(generateTarget())

let compareGuesses =(humanGuess, computerGuess,secretTargetNumber)=>{
  const newHumanGuess = Math.abs(humanGuess - secretTargetNumber);
  const newComputerGuess = Math.abs(computerGuess - secretTargetNumber);
  console.log(newHumanGuess)
  console.log(newComputerGuess)

  if((newHumanGuess < newComputerGuess)|| (newHumanGuess === newComputerGuess)){
 return true;
  }else return false;
}
console.log(compareGuesses(1,5,generateTarget()))

let updateScore =(winner)=>{
if(winner=== 'human'){
  humanScore += 1
}
 if(winner=== 'computer'){
  computerScore += 1
}
}


 let advanceRound =()=>{
  currentRoundNumber +=1
 }
