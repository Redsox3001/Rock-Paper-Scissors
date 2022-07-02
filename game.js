function computerPlay (){
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choicesIndex = Math.floor(Math.random() * choices.length); 
    return choices[choicesIndex];
};

function playRound(playerSelection,computerSelection) {
if (playerSelection === 'Rock'){
    switch(computerSelection){
        case 'Rock':
            console.log('Tie')
                return 0
        case 'Paper':
            console.log('You lose!')
                return 'computer'
        case 'Scissors':
            console.log('You win!')
                return 'player'
    }
}
else if (playerSelection === 'Paper'){
    switch(computerSelection){
        case 'Rock':
            console.log('You win!')
                return 'player'
        case 'Paper':
            console.log('Tie')
                return 0
        case 'Scissors':
            console.log('You lose!')
                return 'computer'
    }
}
else if (playerSelection === 'Scissors'){
    switch(computerSelection){
        case 'Rock':
            console.log('You lose!')
                return 'computer'
        case 'Paper':
            console.log('You win!')
                return 'player'
        case 'Scissors':
            console.log('Tie')
                return 0
    }
}

}


const playerSelection = 'Paper';
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));
    
    

