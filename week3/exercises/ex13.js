const secretNumber = 7;
const guesses = [1, 7, 57];

for (let i = 0; i < guesses.length; i++) {

    if (guesses[i] > secretNumber) {
        console.log("Too high");
    }
    else if (guesses[i] < secretNumber) {
        console.log("Too low");
    }
    else {
        console.log("Correct");
    }

}