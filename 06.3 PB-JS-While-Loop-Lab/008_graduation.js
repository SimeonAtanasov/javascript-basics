function graduation(input){
    let name = input.shift();
    let count = 1;
    let totalGrade = 0;

    while(count <= 12){
        let grade = Number(input.shift());

        if(grade < 4.00){
            continue;
        }
        count++;
        totalGrade += grade;
    }
    console.log(`${name} graduated. Average grade: ${((totalGrade / 12).toFixed(2))}`);
}

graduation(["Pesho",
"4",
"5.5",
"6",
"5.43",
"4.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])