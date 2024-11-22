function summerPurchaise(input){
    let budget = Number(input.shift());
    let beachTowel = Number(input.shift());
    let discount = Number(input.shift());
    let priceUmbrella = beachTowel - (beachTowel / 3);
    let priceFlipFlops = priceUmbrella * 0.75;
    let priceBeachBag = (beachTowel + priceFlipFlops)  / 3;

    let sum = beachTowel + priceUmbrella + priceBeachBag + priceFlipFlops;
    let totalSum = sum - sum / 100 * discount;

    let diff = Math.abs(totalSum - budget);
    if (budget >= totalSum){
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    }
    else {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`);
    }
}
summerPurchaise([
    "40",
    "15",
    "5"   
])