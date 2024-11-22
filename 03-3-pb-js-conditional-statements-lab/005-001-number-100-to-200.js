function number100to200(input) {
    let index = 0;
    input = Number(input[index]);
    if (input < 100) {
        console.log("Less than 100");
    } else if (input > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }

}

number100to200([95]);
number100to200([120]);
number100to200([210]);