function sumNumbers(input){
    let sum = 0;
    let number = input.shift();

    while(number !== "Stop"){
        sum += Number(number);
        number = input.shift();
    }
    console.log(sum);

}

sumNumbers(
[    "10",
    "20",
    "30",
    "45",
    "Stop"]
)