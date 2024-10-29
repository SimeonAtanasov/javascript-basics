function FoodDelivery(ChickenMenuCount, FishMenuCount, VegeterianMenuCount) {
    // •	Пилешко меню –  10.35 лв. 
    // •	Меню с риба – 12.40 лв. 
    // •	Вегетарианско меню  – 8.15 лв. 
    let Menus = ((ChickenMenuCount * 10.35) + (FishMenuCount * 12.40) + (VegeterianMenuCount * 8.15))
    let Dessert = 0.2 * Menus
    let TotalDelivery = Menus + Dessert + 2.50;
    //     От конзолата се четат 3 реда:
    // •	Брой пилешки менюта – цяло число в интервала [0 … 99]
    // •	Брой менюта с риба – цяло число в интервала [0 … 99]
    // •	Брой вегетариански менюта – цяло число в интервала [0 … 99]
    console.log(TotalDelivery)
}

FoodDelivery(2, 4, 3)