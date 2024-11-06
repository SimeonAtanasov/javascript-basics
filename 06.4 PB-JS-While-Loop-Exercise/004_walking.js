function walking(input){
    let steps = input.shift();
    let totalSteps = 0;
    let isReached = false;

    while(steps !== "Going home"){
        totalSteps += Number(steps);
        if(totalSteps < 10000){
            steps = input.shift();
        }
        else {
            isReached = true;
            break;
        }
    }
    if(steps === "Going home"){
        steps = Number(input.shift());
        totalSteps += Number(steps);
    }
    if(totalSteps >= 10000 || isReached){
        console.log(`Goal reached! Good job!`);
    }
    else {
        let lasting = 10000 - totalSteps;
        console.log(`${lasting} more steps to reach goal.`);
    }
}

walking([
    "1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
    
])