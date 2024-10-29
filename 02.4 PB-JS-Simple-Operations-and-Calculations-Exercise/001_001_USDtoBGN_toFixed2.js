function USDtoBGN(usd) {
    if (isNaN(usd)) {
        console.log("Please enter a valid Number.");
        return;
    }
    let bgn = Number(usd) * 1.79549;
    console.log(bgn.toFixed(2));
}

USDtoBGN("22");
USDtoBGN("invalid");