function cake(input){
    let length = Number(input.shift());
    let width = Number(input.shift());

    let cakeSize = length * width;

    let piece = input.shift();

    let totalPieces = 0;
    let isCake = false;

    while(piece !== "STOP"){
        totalPieces += Number(piece);
        if(cakeSize > totalPieces){
            piece = input.shift();
        } else {
            isCake = true;
        }
    }

    if(piece ==="STOP"){
        console.log(`${Math.abs(totalPieces-cakeSize)} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize - totalPieces)} pieces more.`);
    }

}

cake([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
])