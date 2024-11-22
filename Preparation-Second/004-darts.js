function darts(input){
    let points = Number(input.shift())
    let isBullseeye = false;
    let counter = 0;

    while(points > 0) {
        let sector = input.shift();
        let score = Number(input.shift());

        switch(sector){
            case "bullseye":
                isBullseeye = true;
                break;
            case "number section":
                points -= score;
                break;
            case "double ring":
                points -= score * 2;
                break;
            case "triple ring":
                points -= score * 3;
                break;
        }
        if(isBullseeye){
            counter++;
            break;
        }
        counter++;
    }
    if(points === 0){
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    }
    else if (isBullseeye) {
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
    }
    else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
    }
         
}


darts([
    "150",
    "double ring",
    "20",
    "triple ring",
    "10",
    "number section",
    "20",
    "triple ring",
    "20"
    ])