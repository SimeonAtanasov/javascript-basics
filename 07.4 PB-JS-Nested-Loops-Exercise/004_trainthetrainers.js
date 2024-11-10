function trainthetrainers(input){
    let countJury = Number(input.shift());
    let presentationName = input.shift();
    let finalAssessment = 0;
    let countGrade = 0;

    while(presentationName !== "Finish"){
        let avarageGrade = 0;
        for(let i = 0; i < countJury; i++){
            let grade = Number(input.shift());
            avarageGrade += grade;
            finalAssessment +=grade;
            countGrade++;
        }
        console.log(`${presentationName} - ${(avarageGrade/countJury).toFixed(2)}.`);
        presentationName = input.shift();
    }
    console.log(`Student's final assessment is ${finalAssessment / countGrade}.`);
}

trainthetrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]
    )