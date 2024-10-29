function fishTank(a, b, c, d) {
    let  fishTankTotal = a * b * c;
    let litersTotal = fishTankTotal * 0.001;
    let  percentageFull = d * 0.01;
    let liters = litersTotal*(1-percentageFull);
    console.log(`${liters.toFixed(3)}`)
}

fishTank(85, 75, 47, 17);