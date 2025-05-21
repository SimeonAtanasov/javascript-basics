function personalTitles(age, sex) {
    age = Number(age);

    if (age >= 16) {
        if (sex == "f") {
            console.log("Ms.");
        }
        else {
            console.log("Mr.");
        }
    }
    else {
        if (sex == "m") {
            console.log("Master");
        }
        else {
            console.log("Miss");
        }
    }
}

personalTitles("12", "f");
personalTitles("17", "m");
personalTitles("25", "f");
personalTitles("13.5", "m");