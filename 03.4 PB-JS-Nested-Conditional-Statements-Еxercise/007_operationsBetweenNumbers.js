function operationsBetweenNumbers(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);
    result = 0.00;


    // Приемат се 3 реда, извадени от входния аргумент:
    // •	N1 – цяло число в интервала [0...40 000]
    // •	N2 – цяло число в интервала [0...40 000]
    // •	Оператор – един символ измежду: "+", "-", "*", "/", "%"
    if (operator == "+" || operator == "-" || operator == "*") {
        switch (operator) {
            case "+":
                result = N1 + N2;
                if (result % 2 == 0) {
                    console.log(`${N1} ${operator} ${N2} = ${result} - even`)
                }
                else {
                    console.log(`${N1} ${operator} ${N2} = ${result} - odd`)
                }
                break;
            case "-":
                result = N1 - N2;
                if (result % 2 == 0) {
                    console.log(`${N1} ${operator} ${N2} = ${result} - even`)
                }
                else {
                    console.log(`${N1} ${operator} ${N2} = ${result} - odd`)
                }
                break;
            case "*":
                result = N1 * N2;
                if (result % 2 == 0) {
                    console.log(`${N1} ${operator} ${N2} = ${result} - even`)
                }
                else {
                    console.log(`${N1} ${operator} ${N2} = ${result} - odd`)
                }
                break;
        }
    } else if (operator == "/") {
        if (N2 !== 0) {
            result = N1 / N2;
            console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${N1} by zero`);
        }
    } else if (operator == "%") {
        if (N2 !== 0) {
            result = N1 % N2;
            console.log(`${N1} ${operator} ${N2} = ${result}`);
        } else {
            console.log(`Cannot divide ${N1} by zero`);
        }
    }
    // Да се отпечата на конзолата един ред:
    // •	Ако операцията е събиране, изваждане или умножение:
    // o	 "{N1} {оператор} {N2} = {резултат} – {even/odd}"
    // •	Ако операцията е деление:
    // o	"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
    // •	Ако операцията е модулно деление: 
    // o	"{N1} % {N2} = {остатък}"
    // •	В случай на деление с 0(нула): 
    // o	"Cannot divide {N1} by zero"

}

operationsBetweenNumbers("10", "12", "+");
operationsBetweenNumbers("10", "1", "-");
operationsBetweenNumbers("7", "3", "*");