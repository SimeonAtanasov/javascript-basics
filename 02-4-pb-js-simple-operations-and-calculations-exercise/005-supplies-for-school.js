function SuppliesforSchool(CountPen, CountMarker, LitersCleaner, PercentageDiscount) { 
    // •	Пакет химикали - 5.80 лв. 
    // •	Пакет маркери - 7.20 лв. 
    // •	Препарат - 1.20 лв (за литър)
    let bill = ((CountPen * 5.80) + (CountMarker * 7.2) + (LitersCleaner * 1.2)) - (((CountPen * 5.80) + (CountMarker * 7.2) + (LitersCleaner * 1.2)) * (PercentageDiscount*0.01))

    //     От конзолата се четат 4 числа:
    // •	Брой пакети химикали - цяло число в интервала [0...100]
    // •	Брой пакети маркери - цяло число в интервала [0...100]
    // •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
    // •	Процент намаление - цяло число в интервала [0...100]

    console.log(bill);
}

SuppliesforSchool(2, 3, 4, 25);