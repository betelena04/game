const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    // Start the game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
  
    // Play match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach((hand) => {
        hand.addEventListener("animationend", function () {
          this.style.animation = "";
        });
      });
      // Computer options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach((option) => {
        option.addEventListener("click", function () {
            if (pScore === 3 || cScore === 3) {
                return;
            }
          // Computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            // Compare hands
            compareHands(this.textContent, computerChoice);
  
            // Update images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
  
          // Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector(".winner");
        // Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = "It is a tie";
          return;
        }
        // Checking for rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            endGame();
            return;
          } else {
            winner.textContent = "Computer wins";
            cScore++;
            updateScore();
            endGame();
            return;
          }
        }
        // Checking for paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer wins";
            cScore++;
            updateScore();
            endGame();
            return;
          } else {
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            endGame();
            return;
          }
        }
        // Checking for scissors
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "Computer wins";
            cScore++;
            updateScore();
            endGame();
            return;
          } else {
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            endGame();
            return;
          }
        }
      };
  
    // End game
    const endGame = () => {
        if (pScore === 3 || cScore === 3) {
          // Display the winner
          const winner = document.querySelector('.winner');
          if (pScore === 3) {
              winner.textContent = 'Player wins the game!';
          } else {
              winner.textContent = 'Computer wins the game!';
          }
          // Reset scores
          pScore = 0;
          cScore = 0;
          updateScore();
          // Reset player and computer hand images
          const playerHand = document.querySelector('.player-hand');
          const computerHand = document.querySelector('.computer-hand');
          playerHand.src = './assets/rock.png';
          computerHand.src = './assets/rock.png';
          // Restart the game after a delay
          const match = document.querySelector('.match');
          match.classList.remove('fadeIn');
          match.classList.add('fadeOut');
          
          setTimeout(() => {
            const introScreen = document.querySelector('.intro');
            introScreen.classList.remove('fadeOut');
            introScreen.classList.add('fadeIn');
          }, 1500); 
        }
    };
    //restart game when click on restart
    const restartGame = () => {
        pScore = 0;
        cScore = 0;
        updateScore();
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        playerHand.src = "./assets/rock.png";
        computerHand.src = "./assets/rock.png";
        const match = document.querySelector('.match');
        match.classList.remove('fadeOut');
        match.classList.add('fadeIn');
        const introScreen = document.querySelector('.intro');
        introScreen.classList.remove('fadeIn');
        introScreen.classList.add('fadeOut');
      };
      
      const restartBtn = document.querySelector('.restart-btn');
      restartBtn.addEventListener('click', restartGame);
     //Call all the inner function
     startGame();
     playMatch();
};

//start the game function
game();
