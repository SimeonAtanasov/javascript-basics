function solve(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

  let output = "";
    for(let i = firstNum; i <= secondNum; i++){
        let strNum = i + "";
        let evenPosition = 0;
        let oddPosition = 0;
        for(let e = 0; e < strNum.length; e++){
            if (e % 2 == 0) {
                evenPosition += Number(strNum[e]);
            }
            else {
                oddPosition += Number(strNum[e]);
            }
        }
        if (evenPosition === oddPosition){
        output += i + " ";
        }
    }
    console.log(output);

}
solve([100000, 100050])