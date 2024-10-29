function timeAdd15minutes(hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);
    let hoursIntoMinutes = hour * 60;
    let totalminutes = hoursIntoMinutes + minutes + 15;

    let hourNew = Math.floor(totalminutes / 60);
    let minutesNew = totalminutes % 60;

    function timeAdd15minutes(hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);
    let hoursIntoMinutes = hour * 60;
    let totalminutes = hoursIntoMinutes + minutes + 15;

    let hourNew = Math.floor(totalminutes / 60);
    let minutesNew = totalminutes % 60;

    if (minutes >= 45 && hour >= 23) {
        hourNew = 0;
            if (minutesNew <10){
                console.log(`${hourNew}:0${minutesNew}`);
            }
            else {
                console.log(`${hourNew}:${minutesNew}`);
            }
    }
    else {
            if (minutesNew <10){
                console.log(`${hourNew}:0${minutesNew}`);
            }
            else {
                console.log(`${hourNew}:${minutesNew}`);
            }
    }
}if (minutes >= 45 && hour >= 23) {
        hourNew = 0;
            if (minutesNew <10){
                console.log(`${hourNew}:0${minutesNew}`);
            }
            else {
                console.log(`${hourNew}:${minutesNew}`);
            }
    }
    else {
            if (minutesNew <10){
                console.log(`${hourNew}:0${minutesNew}`);
            }
            else {
                console.log(`${hourNew}:${minutesNew}`);
            }
    }
}

timeAdd15minutes("1", "46");
timeAdd15minutes("0", "01");
timeAdd15minutes("23", "59");
timeAdd15minutes("11", "08");
timeAdd15minutes("12", "49");
