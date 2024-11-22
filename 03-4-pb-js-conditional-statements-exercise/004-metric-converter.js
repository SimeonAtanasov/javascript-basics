function metricConverter(number, value1, value2) {
    number = Number(number);
    let numberFinal;
    if (value1 === "mm" && value2 === "m") {
        numberFinal = number / 1000;
        console.log(numberFinal.toFixed(3));
    } else if (value1 === "mm" && value2 === "cm") {
        numberFinal = number / 10;
        console.log(numberFinal.toFixed(3));
    } else if (value1 === "cm" && value2 === "mm") {
        numberFinal = number * 10;
        console.log(numberFinal.toFixed(3));
    } else if (value1 === "cm" && value2 === "m") {
        numberFinal = number / 100;
        console.log(numberFinal.toFixed(3));
    } else if (value1 === "m" && value2 === "mm") {
        numbereFinal = number * 1000;
        console.log(numberFinal.toFixed(3));
    } else {
        numberFinal = number * 100;
        console.log(numberFinal.toFixed(3));
    }
    
}

metricConverter("12", "mm", "m");
metricConverter("150", "m", "cm");
metricConverter("45", "cm", "mm");

