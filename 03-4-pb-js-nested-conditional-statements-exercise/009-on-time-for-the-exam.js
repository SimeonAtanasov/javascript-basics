function onTimefortheExam(hourExam, minutesExam, hourArrival, minutesArrival) {
    hourExam = Number(hourExam);
    minutesExam = Number(minutesExam);
    hourArrival = Number(hourArrival);
    minutesArrival = Number(minutesArrival);

    let examTimeMinutes = (hourExam * 60) + minutesExam;
    let arrivalTimeMinutes = (hourArrival * 60) + minutesArrival;

    let difference = examTimeMinutes - arrivalTimeMinutes;

    if (arrivalTimeMinutes > examTimeMinutes) {
        console.log("Late");
    } else if (difference <= 30 && 0 <= difference) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (difference > 0 && difference < 60){
        console.log(`${difference} minutes before the start`);
    }
    else if (difference >= 60){
        hours = Math.floor(difference / 60);
        minutes = difference % 60;

        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`);
        }
        else {
            console.log(`${hours}:${minutes} hours before the start`);
        }

    }
    else if (difference <= 0 && difference > -60){
        console.log(`${Math.abs(difference)} minutes after the start`)
    }
    else if(difference <= -60) {
        hours = Math.floor(Math.abs(difference) / 60);
        minutes = Math.abs(difference) % 60;

        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`);
        }
        else {
            console.log(`${hours}:${minutes} hours after the start`);
        }
    }



//      Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
//  •	"mm minutes before the start" за идване по-рано с по-малко от час.
//  •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
//  •	 "mm minutes after the start" за закъснение под час.
//  •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

}

    //      Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
    //  •	"mm minutes before the start" за идване по-рано с по-малко от час.
    //  •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
    //  •	 "mm minutes after the start" за закъснение под час.
    //  •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".


    onTimefortheExam("9", "30", "9", "50");
