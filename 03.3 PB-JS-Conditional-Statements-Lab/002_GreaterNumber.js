function GreaterNumber(input) {
    let index = 0;

    let numOne = Number(input[index]);
    index ++;
    let numTwo = Number(input[index]);

    if (numOne > numTwo){
        console.log(numOne);
    }
    else {
        console.log(numTwo);
    }

}

GreaterNumber([5, 3]);
GreaterNumber([3, 5]);
GreaterNumber([10, 10]);
GreaterNumber([-5, 5]);
