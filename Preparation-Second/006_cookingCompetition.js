function cookingCompetition(input) {
    let count = Number(input.shift());
    let totalBakedSweet = 0;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        let name = input.shift();
        let command = input.shift();
        let cookiesCount = 0;
        let cakesCount = 0;
        let wafflesCount = 0;

        while (command !== "Stop baking!") {
            let type = command;
            let countOfBakingSwits = Number(input.shift());
            switch (type) {
                case "cookies":
                    cookiesCount += countOfBakingSwits;
                    sum += countOfBakingSwits * 1.50;
                    break;
                case "cakes":
                    cakesCount += countOfBakingSwits;
                    sum += countOfBakingSwits * 7.80;
                    break;
                case "waffles":
                    wafflesCount += countOfBakingSwits;
                    sum += countOfBakingSwits * 2.30;
                    break;
            }

            command = input.shift();
        }
        totalBakedSweet += cookiesCount + cakesCount + wafflesCount;
        console.log(`${name} baked ${cookiesCount} cookies, ${cakesCount} caes and ${wafflesCount} waffles.`);
    }
    console.log(`All bakery sold: ${totalBakedSweet}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)}  lv.`)

}

cookingCompetition([
    "3",
    "Iva",
    "cookies",
    "5",
    "cakes",
    "3",
    "Stop baking!",
    "George",
    "cakes",
    "7",
    "waffles",
    "2",
    "Stop baking!",
    "Ivan",
    "cookies",
    "6",
    "Stop baking!"
])