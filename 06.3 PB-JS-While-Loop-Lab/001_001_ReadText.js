function readText(input){
    let text = input.shift();
    let count = 0;


    while(text !== "Stop"){
        count++;
        
        text = input.shift();
        // while does not stop until we enter the text "Stop".
        // count increases because it will be the number of times while was done.
        // to receive new input we use input.shift()

    }
    console.log(count);
    
}

readText(
["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop"]
)