function sumSeconds(input) {
    let index = 0;
    let firstTime = Number(input[index]);
    index++;
    let secondTime = Number(input[index]);
    index++;
    let thirdTime = Number(input[index]);
    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds([35, 45, 44]);
sumSeconds([22, 7, 34]);
sumSeconds([50, 50, 49]);
sumSeconds([14, 12, 10]);