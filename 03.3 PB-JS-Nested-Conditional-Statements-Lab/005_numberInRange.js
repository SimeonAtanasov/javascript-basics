function numberInRange(num) {
    let number = Number(num);
    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No")
    }
}

numberInRange("-25", "0", "25");