function moving(input){
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());

    let isFreeSpace = true;
    let freeSpaceCubic = w * l * h;

    let command = input.shift();
    
    while(command !=="Done"){
        let box = Number(command);
        freeSpaceCubic -= box;
        if(freeSpaceCubic < 0){
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(freeSpaceCubic)} Cubic meters more.`);
            break;
        }
        command = input.shift();
    }
    if(isFreeSpace){
        console.log(`${freeSpaceCubic} Cubic meters left`);
    }

}

moving([
    "10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"   
])