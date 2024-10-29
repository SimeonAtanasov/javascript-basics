function scholarship(income, averageGrade, minimumWage) {
    //      Потребителят въвежда 3 числа, по едно на ред:
    // 1.	Доход в лева - реално число в интервала [0.00..6000.00]
    // 2.	Среден успех -  реално число в интервала [2.00...6.00]
    // 3.	Минимална работна заплата - реално число в интервала [0.00..1000.00]
    income = Number(income);
    averageGrade = Number(averageGrade);
    minimumWage = Number(minimumWage);

    if (income < minimumWage && averageGrade > 4.50) {
        console.log(`You get a Social scholarship ${Math.floor(0.35 * minimumWage)} BGN`)
    } else if (averageGrade >= 5.50) {
        console.log(`You get a scholarship for excellent results ${Math.floor(averageGrade * 25)} BGN`)
    } else {
        console.log("You cannot get a scholarship!");
    }


    // доход на член от семейството по-малък от минималната работна заплата и успех над 4.5
    // Размер на социалната стипендия - 35% от минималната работна заплата
    // успех над 5.5, включително    
    // Размер на стипендията за отличен успех - успехът на ученика, умножен по коефициент 25.

    // •	Ако ученикът няма право да получава стипендия, се извежда:
    // "You cannot get a scholarship!"
    // •	Ако ученикът има право да получава социална стипендия и тя е по-висока от стипендията за отличен успех:
    // "You get a Social scholarship {стойност на стипендия} BGN"
    // •	Ако ученикът има право да получава стипендия за отличен успех и тя е по-висока или равна по стойност на социалната стипендия за него:
    // •	"You get a scholarship for excellent results {стойност на стипендията} BGN"


}

scholarship(480.00, 4.60, 450.00);
scholarship(300.00, 5.65, 420.00);