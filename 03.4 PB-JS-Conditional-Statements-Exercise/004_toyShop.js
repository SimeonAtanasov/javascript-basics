function toyShop(excursionPrice, puzzles, speakingDolls, tedyBears, minions, trucks) {
    excursionPrice = Number(excursionPrice);
    puzzles = Number(puzzles);
    speakingDolls = Number(speakingDolls);
    tedyBears = Number(tedyBears);
    minions = Number(minions);
    trucks = Number(trucks);
    
    let totalToys = puzzles + speakingDolls + tedyBears + minions + trucks;
    let totalPrice = (puzzles * 2.60) + (speakingDolls * 3) + (tedyBears * 4.10) + (minions * 8.20) + (trucks * 2);

    if (totalToys >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = 0.9 * totalPrice;

    if (totalPrice >= excursionPrice) {
        console.log(`Yes! ${(totalPrice-excursionPrice).toFixed(2)} lv left.`);
    }   else  {
        console.log(`Not enough money! ${(excursionPrice-totalPrice).toFixed(2)} lv needed.`);
    }
}

    //     Цени на играчките:
    // •	Пъзел - 2.60 лв.
    // •	Говореща кукла - 3 лв.
    // •	Плюшено мече - 4.10 лв.
    // •	Миньон - 8.20 лв.
    // •	Камионче - 2 лв.


    // Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. 
    // От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

    // Вход
    // От конзолата се четат 6 реда:
    // 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
    // 2.	Брой пъзели - цяло число в интервала [0… 1000]
    // 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
    // 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
    // 5.	Брой миньони - цяло число в интервала [0 … 1000]
    // 6.	Брой камиончета - цяло число в интервала [0 … 1000]
    // Изход
    // На конзолата се отпечатва:
    // •	Ако парите са достатъчни се отпечатва:
    // o	"Yes! {оставащите пари} lv left."
    // •	Ако парите НЕ са достатъчни се отпечатва:
    // o	"Not enough money! {недостигащите пари} lv needed."
    
    // Резултатът трябва да се форматира до втория знак след десетичната запетая.


toyShop(40.8, 20, 25, 30, 50, 10)
toyShop(320, 8, 2, 5, 5, 1)