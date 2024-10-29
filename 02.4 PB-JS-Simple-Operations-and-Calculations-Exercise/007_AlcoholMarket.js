function AlcoholMarket(input) {
    // 1.	Цена на уискито в лева – реално число в интервала [0.00 … 10000.00]
    // 2.	Количество на бирата в литри – реално число в интервала [0.00 … 10000.00]
    // 3.	Количество на виното в литри – реално число в интервала [0.00 … 10000.00]
    // 4.	Количество на ракията в литри – реално число в интервала [0.00 … 10000.00]
    // 5.	Количество на уискито в литри – реално число в интервала [0.00 … 10000.00]
    let index = 0;
    let WhiskyBGN = Number(input[index]);
    index++;
    let BeerLiters = Number(input[index]);
    index++;
    let WineLiters = Number(input[index]);
    index++;
    let RakiaLiters = Number(input[index]);
    index++;
    let WhiskyLiters = Number(input[index]);
    index++;


    // •	цената на ракията е на половина по-ниска от тази на уискито;
    // •	цената на виното е с 40% по-ниска от цената на ракията;
    // •	цената на бирата е с 80% по-ниска от цената на ракията.
    let RakiaPrice = 1/2 * WhiskyBGN;
    let WinePrice = 0.6 * RakiaPrice;
    let BeerPrice = 0.2 * RakiaPrice;

    let RakiaTotalPrice = RakiaLiters * RakiaPrice;
    let WineTotalPrice = WineLiters * WinePrice;
    let BeerTotalPrice = BeerLiters * BeerPrice;
    let WhiskyTotalPrice = WhiskyLiters * WhiskyBGN;
    let TotalPrice = RakiaTotalPrice + WineTotalPrice + BeerTotalPrice + WhiskyTotalPrice;

    console.log(TotalPrice.toFixed(2));
}

AlcoholMarket([50, 10, 3.5, 6.5, 1]);
AlcoholMarket([63.44, 3.57, 6.35, 8.15, 2.5]);