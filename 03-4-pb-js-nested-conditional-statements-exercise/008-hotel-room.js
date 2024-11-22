function hotelRoom(month, nights) {
    nights = Number(nights);
    let studio = 0.00;
    let apartment = 0.00;
    
    if (month === "May" || month === "October") {
        if (nights > 7 && nights <= 13) {
            studio = 50 * 0.95;
            apartment = 65;
        } else if (nights > 14) {
            studio = 50 * 0.70;
            apartment = 65 * 0.90;
        } else {
            studio = 50;
            apartment = 65;
        }
    } else if (month === "June" || month === "September") {
        if (nights > 14){
            studio = 75.20 * 0.80;
            apartment = 68.70 * 0.90;
        } else {
            studio = 75.20;
            apartment = 68.70;
        }
    } else if (month === "July" || month === "August"){
        if (nights > 14){
            studio = 76;
            apartment = 77 * 0.90;
        } else {
            studio = 76;
            apartment = 77;
        }
    }
    let studioPrice = studio * nights;
    let apartmentPrice = apartment * nights;

    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`)
} 

hotelRoom("May", "15");
hotelRoom("June", "14");
