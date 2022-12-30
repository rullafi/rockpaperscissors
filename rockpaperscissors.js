const game = () => {
    let gScore = '0';
    let pcScore = '0';

    const playGame = () => {
        const buttons = document.querySelectorAll('.buttons button')
        const pcChoices = ['rock', 'paper', 'scissors'];

        buttons.forEach(button =>{
            button.addEventListener('click', function(){
                const pcRandom = Math.floor(Math.random() * 3);
                const pcChoice = pcChoices[pcRandom];
                compare(this.textContent, pcChoice);
            });
        });
    };

    const scoreUpdater = () => {
        const gameblerScore = document.querySelector('.gameblerPoints p');
        const computerScore = document.querySelector('.pcPoints p');
        gameblerScore.textContent = gScore;
        computerScore.textContent = pcScore;  
        winnerAssigner();  
        };
    
    const winnerAssigner = () => {
        const insidertext = document.querySelector('.insidetext');
        if ( gScore < 5 && pcScore === 5 ) {
            insidertext.textContent = ' PC WON ! PLEASE REFRESH THE PAGE TO PLAY AGAIN';
        }   else if ( gScore === 5 && pcScore < 5 ) {
            insidertext.textContent = ' GAMEBLER WON ! PLEASE REFRESH THE PAGE TO PLAY AGAIN';
            }   
    }; 
      
    const compare = (gameblerChoice, pcChoice) =>{
        const insidetext = document.querySelector('.insidetext');
        if (gameblerChoice === pcChoice){
            insidetext.textContent = ' draw!';
            return;
        }
        if (gameblerChoice === 'rock'){
            if(pcChoice === 'scissors'){
                insidetext.textContent = 'gamebler  wins!';
                gScore++;
                scoreUpdater();
                return;
            } else{
                insidetext.textContent = 'computer  wins!';
                pcScore++;
                return;
            }
        }
        if (gameblerChoice === 'paper'){
            if(pcChoice === 'rock'){
                insidetext.textContent = 'gamebler  wins!';
                gScore++;
                scoreUpdater();
                return;
            } else{
                insidetext.textContent = 'computer  wins!';
                pcScore++;
                return;
            }
        }
        if (gameblerChoice === 'scissors'){
            if(pcChoice === 'paper'){
                insidetext.textContent = 'gamebler  wins!';
                gScore++;
                scoreUpdater();
                 return;
            } else{
                insidetext.textContent = 'computer  wins!';
                pcScore++;
                scoreUpdater();
                return;
            }
        }
    }
    playGame();
}

game();

