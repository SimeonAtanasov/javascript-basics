function graduation(input) {
    let name = input.shift();

    let count = 1;
    let totalGrade = 0;
    let failed = 0
    let isFailed = true;

    while(count <= 12) {
        let grade = Number(input.shift());

        if(grade < 4.00){
            failed++;
            continue;
        }

        if(failed > 1){
            isFailed = false;
            console.log(`${name} has been excluded at ${count} grade`)
            break;
        }
        count++;
        totalGrade += grade;
    }

    if(isFailed){
        console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`)
    }


}

graduation(
    [
        "Mimi",
        "5",
        "6",
        "5",
        "6",
        "5",
        "6",
        "6",
        "2",
        "3"
    ]
)