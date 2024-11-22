function evenOrOdd(input) {
    let index = 0;
    let number = Number(input[index]);
    if (number % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

EvenOrOdd([2]);
EvenOrOdd([3]);
EvenOrOdd([25]);
EvenOrOdd([1024]);