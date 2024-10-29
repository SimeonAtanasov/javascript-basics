function cinema(movieType, r, c) {
    let rows = Number(r);
    let columns = Number(c);
    let income = 0;
    
    switch (movieType) {
        case "Premiere":
            income = 12*rows*columns;
            break;
        case "Normal":
            income = 7.50*rows*columns;
            break;
        case "Discount":
            income = 5.00*rows*columns;
            break;
        default:
            console.log("Error");
            break;
    }
    console.log(`${income.toFixed(2)} leva`)
}

cinema("Premiere", "10", "12");
cinema("Normal", "21", "13");
cinema("Discount", "12", "30");