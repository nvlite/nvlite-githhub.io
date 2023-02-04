
function playRound(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="rock" || 
         playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="scissors" || 
         playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="paper"){
       playerScore++;
      return win;
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="paper" || 
             playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="rock" || 
             playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="scissors"){
      computerScore++;
      return lose;
    }
      else if (playerSelection.toLowerCase() == computerSelection[computerPlay]){
     tieScore++;
      return tie;
    } 
    else {
      return "you must input rock, paper or scissors";
    
    } //else if player input paper compare to rock, you win
    }
    
    // declare player and computer parameters 
      let playerSelection = prompt("lets play rock paper scissors"); 
    //let player = playerSelection.toLowerCase(); // *old need to redefine player
    console.log ("you chose " +playerSelection.toLowerCase());
    
    let computerSelection = ["rock","paper","scissors"];
    let computerPlay= Math.floor(Math.random() * computerSelection.length);
    console.log("The computer chose " +computerPlay, computerSelection[computerPlay]);
      
    //define scores
    let playerScore=0;
    let computerScore=0;
    let tieScore=0;
    
    //define win, lose or tie
    const win="You Win this round!\n -------";
    const lose="You Lose this round!\n -------";
    const tie= "This round is a tie!\n -------";
    
    //define playround
    console.log(playRound(playerSelection, computerSelection));
    
    //loop
    function game() {
       
     for (let i = 0; i <5; i++) { 
     playerSelection = prompt("lets play rock paper scissors"); 
    
    console.log ("you chose " +playerSelection.toLowerCase());
       
     computerSelection = ["rock","paper","scissors"];
     computerPlay= Math.floor(Math.random() * computerSelection.length);//update computerPlay
       
     console.log("The computer chose " +computerPlay, computerSelection[computerPlay]);//define computer input  
    
    console.log(playRound(playerSelection, computerSelection)); 
     }
      if (playerScore>computerScore){
         return "You Win this game.\n -------";
       }
         if (playerScore==computerScore){
           return "This game is a tie.\n -------";
         }
        else{
         return "You Lose this game.\n -------";
       }
    }

     //play the loop
    
    console.log(game());
    
    console.log( "Your final score is " +playerScore +" wins " +computerScore +" loses and " +tieScore +" draws.\n -------");
    
    score=playerScore+computerScore+tieScore;

    //count win lose or tie    

    console.log("You played this game " +score +" times.\n -------\nGame over.");
