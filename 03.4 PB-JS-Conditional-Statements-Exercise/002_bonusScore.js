function bonusScore(score){
    // •	Ако числото е до 100 включително, бонус точките са 5.
    // •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
    // •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
    // •	Допълнителни бонус точки (начисляват се отделно от предходните):
    // o	За четно число  + 1 т.
    // o	За число, което завършва на 5  + 2 т.
    score = Number(score);
    let bonus = 0.0;

    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000){
        bonus = 0.10 * score;
    } else {
        bonus = 0.20 * score;
    }

    if (score % 2 == 0) {
        bonus += 1;
    }  else if (score % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(score + bonus);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);