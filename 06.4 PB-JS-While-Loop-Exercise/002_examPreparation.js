function examPreparation(input){
    let inputOfBadGrades = Number(input.shift());
    let unsatisfiedGrades = 0;

    let gradeName = input.shift();
    let grade = Number(input.shift());


    let counterForGrades = 0;
    let lastProblem = "";
    let sumGrades = 0;
    let averageGrade = 0;


    while((gradeName !== "Enough") && unsatisfiedGrades < inputOfBadGrades){
        counterForGrades++
        sumGrades += grade;
        lastProblem = gradeName;

        if(grade <= 4){
            unsatisfiedGrades++
        }

        gradeName = input.shift();
        grade = Number(input.shift());
    }

    if (gradeName === "Enough"){
        averageGrade = (sumGrades / counterForGrades);
       console.log(`Average score: ${averageGrade.toFixed(2)}`);
       console.log(`Number of problems: ${counterForGrades}`);
       console.log(`Last problem: ${lastProblem}`);        
    } else {
        console.log(`You need a break, ${unsatisfiedGrades} poor grades.`);
    }

}

examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
    ]);

examPreparation([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])