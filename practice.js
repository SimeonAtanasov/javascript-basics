function CharityCampaign(input) {
    let index = 0;
    let Days = Number(input[index]);
    index++;
    let Bakers = Number(input[index]);
    index++;
    let Cakes= Number(input[index]);
    index++;
    let Waffles = Number(input[index]);
    index++;
    let Pancakes = Number(input[index]);

    let CakePrice = 45;
    let WafflesPrice = 5.80;
    let PancakesPrice = 3.20;

    let TotalCakesPrice = Cakes * CakePrice;
    let TotalWafflesPrice = Waffles * WafflesPrice;
    let TotalPancakesPrices = Pancakes * PancakesPrice;

    let DayPrice = (TotalCakesPrice + TotalPancakesPrices + TotalWafflesPrice) * Bakers;
    let Campaign = DayPrice * Days;
    let Money = Campaign - (1/8 * Campaign);

    console.log(Money.toFixed(2));
    // 1.	Броят на дните, в които тече кампанията – цяло число в интервала [0 … 365]
    // 2.	Броят на сладкарите – цяло число в интервала [0 … 1000]
    // 3.	Броят на тортите – цяло число в интервала [0… 2000]
    // 4.	Броят на гофретите – цяло число в интервала [0 … 2000]
    // 5.	Броят на палачинките – цяло число в интервала [0 … 2000]
    

}

CharityCampaign([20, 8, 14, 30, 16]);