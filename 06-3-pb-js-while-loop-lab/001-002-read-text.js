function readText(input){
    let index = 0;
    let text = input[index];
    index++;
    let count = 0;

    while(text !== "Stop"){
        count++;
        text = input[index];
        index++;

        // while counts each input until the input is "Stop".
        // count increases each time while is being done again.
        // text receives new value.
        // index gives the possibility to make new input.
    }
    console.log(count);
}

readText(
    ["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "SomeText",
    "SomeText",
    "Stop"]
    )
