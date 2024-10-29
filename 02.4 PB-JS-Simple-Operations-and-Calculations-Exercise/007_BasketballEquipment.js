function BasketballEquipment(price) {
    // •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    // •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    // •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    // •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
    let shoes = price * 0.6;
    let equip = shoes * 0.8;
    let ball = equip / 4;
    let accessories = ball / 5;
    let totalPrice = price + shoes + equip + ball + accessories;
    console.log(totalPrice);

    //     От конзолата се четe 1 ред:
    // •	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]

}

BasketballEquipment(365);