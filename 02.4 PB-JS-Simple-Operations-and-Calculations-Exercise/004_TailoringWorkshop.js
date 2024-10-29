function TailoringWorkshop(countTable, LengthTable, widthTable) {
    let areaTableCloth = countTable * (LengthTable + (2 * 0.30))*(widthTable + (2 * 0.30))
    let kareta = countTable * (LengthTable/2)*(LengthTable/2)
    let priceUSD = areaTableCloth * 7 + kareta * 9;
    let priceBGN = priceUSD * 1.85;
    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`)
}

TailoringWorkshop(5, 1.00, 0.50)