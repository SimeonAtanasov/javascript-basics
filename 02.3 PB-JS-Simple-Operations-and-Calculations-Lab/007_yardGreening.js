function yardGreening(a) {
    let price = Number((a * 7.61).toFixed(2));
    let discount = Number((0.18 * price).toFixed(2));
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

yardGreening(540);