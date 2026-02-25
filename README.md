# Number Guessing Game

## Introduction
Welcome to the Number Guessing Game! Where computer randomly selects a number and the user has to guess it. The user will be given a limited number of chances to guess the number. If the user guesses the number correctly, the game will end, and the user will win. Otherwise, the game will continue until the user runs out of chances.

## How to Run

1. **Clone the Repository:**

    ```
    git clone https://github.com/Biscute-kk/Number-Guessing-Game.git
    ```

## How to Play

1. Run the game by executing the JavaScript file.
    ```
    #navigate to your directory and run
    node app.js
    ```
2. You will be presented with a welcome message and a prompt to select the difficulty level.
    ```
    Welcome to the Number Guessing game!

    I am guessing a number between 1 and 100.
    Choose your difficu;ty
    1.Easy (10 attempts)
    2.Medium (5 attempts)
    3.Hard (3 attempts).
    4.High scores
    5.Exit

    ```
3. Choose the difficulty level by entering 1 for Easy, 2 for Medium, 3 for Hard,4 for High scores or 5 for Exit.
    ```
    Mode: 3
    ```
4. Once you've selected the difficulty level, you will be prompted to enter your guess.
    ```
    Great! You have selected the Hard difficulty level.
    Let's start the game!
    ```
5. Enter a number between 1 and 100.
    ```
    Guess 1 : 4
    ```
6. If your guess is incorrect, you will receive a hint indicating whether the correct number is higher or lower than your guess.
    ```
    Guess 1 :4
    Incorrect!! The Number is greater than 4

    Guess 2 :99
    Incorrect!! The Number is Less than 99
    ```
7. Keep guessing until you correctly guess the number or run out of attempts.
    ```
    Guess 3 :55
    Incorrect!! The Number is Less than 55

    my guess was 25
    Do you want to play again?(y/n) :
    ```
    ```
    Guess 3 :16
    Congratulations! You guessed the correct number in 3 attempts
    Time taken: 8.475 sec
    ```
8. If you want to play again you can type "y" else press "n".
    ```
    Do you want to play again?(y/n) : y
    ```
9. High score keeps track of top 5 lowest number of attemp it tool to guess number or less time taken to guess correct number.
    ```
    {
    Hard: [ { timetaken: 8.475, guessCount: 3 } ],
    Medium: [ { timetaken: 10.915, guessCount: 4 } ],
    Easy: [
        { timetaken: 7.813, guessCount: 5 },
        { timetaken: 12.358, guessCount: 7 }
    ]
    }

    ```
## Difficulty Levels


* **Easy**: 10 attempts to guess the correct number.
* **Medium**: 5 attempts to guess the correct number.
* **Hard**: 3 attempts to guess the correct number.




### Code Structure

The code is organized into the following files:

* `app.js`: The main entry point of the game.
* `easy.js`, `medium.js`, `hard.js`: Separate files for each difficulty level.
* `input.js` : Input readline instance in one file
* `score.json`: JSON file for tracking high scores.




