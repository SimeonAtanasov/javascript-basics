function skiTrip(days, accommodation, grade) {
    days = Number(days);
    let night = days - 1;
    let pricePerNight = 0.00;
    let totalPrice = 0.00;
    if (night < 10) {
        if (accommodation === "room for one person") {
            pricePerNight = 18.00;
        } else if (accommodation === "apartment") {
            pricePerNight = 0.70 * 25.00;
        } else if (accommodation === "president apartment") {
            pricePerNight = 0.90 * 35.00;
        }
    } else if (night >= 10 && night < 15) {
        if (accommodation === "room for one person") {
            pricePerNight = 18.00;
        } else if (accommodation === "apartment") {
            pricePerNight = 0.65 * 25.00;
        } else if (accommodation === "president apartment") {
            pricePerNight = 0.85 * 35.00;
        }
    } else {
        if (accommodation === "room for one person") {
            pricePerNight = 18.00;
        } else if (accommodation === "apartment") {
            pricePerNight = 0.50 * 25.00;
        } else if (accommodation === "president apartment") {
            pricePerNight = 0.80 * 35.00;
        }

    }

    totalPrice = pricePerNight * night;

    if (grade === "positive") {
        totalPrice = 1.25 * totalPrice;
    } else if (grade === "negative"){
        totalPrice = 0.9 * totalPrice;
    }
    console.log(totalPrice.toFixed(2));
}

skiTrip("14", "apartment", "positive");
skiTrip("30", "president apartment", "negative");