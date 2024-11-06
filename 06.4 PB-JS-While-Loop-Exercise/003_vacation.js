function vacation(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());
    let action = input.shift();
    let spendMoney = Number(input.shift());

    let daysCounter = 0;
    let spendCounter = 0;

    while (ownedMoney < neededMoney && spendCounter < 5) {
        if (action === "spend") {
            spendCounter++;
            ownedMoney -= spendMoney;
        }
        else {
            spendCounter = 0;
            ownedMoney += spendMoney;
        }

        if (ownedMoney < 0) {
            ownedMoney = 0;
        }
        
        action = input.shift();
        spendMoney = Number(input.shift());
        daysCounter++;
    }

    if (spendCounter == 5) {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }

    if (ownedMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }

}

vacation([
    "2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
    ])

// Вход
// От конзолата се четат:
// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Програмата трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."
