function areaOfFigures(input) {
    let index = 0;
    let figure = input[index];
    index++;
    let value1 = Number(input[index]);
    index++;
    let value2 = Number(input[index]);
    if (figure === "square") {
        let area = value1*value1;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let area = value1*value2;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let area = Math.PI * value1 * value1;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let area = 1/2*value1*value2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);
