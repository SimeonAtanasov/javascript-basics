function areaOfFigures(input) {
    let figure = input[0];
    let value1 = Number(input[1]);
    let value2 = input.length > 2 ? Number(input[2]) : 0;  // Use value2 only if it’s provided

    if (figure === "square") {
        let area = value1 * value1;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let area = value1 * value2;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let area = Math.PI * value1 * value1;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let area = 0.5 * value1 * value2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);
