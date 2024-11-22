function invalidNumber(number) {
    let num = Number(number);
    let isValid = (num >= 100) && (num <= 200) || num == 0;
    if (!isValid) {
        console.log("invalid");
    } else {
        console.log("")
    }
}

invalidNumber("75");
invalidNumber("150");
invalidNumber("220");
invalidNumber("199");
invalidNumber("-1");
invalidNumber("100");
invalidNumber("200");
invalidNumber("0");