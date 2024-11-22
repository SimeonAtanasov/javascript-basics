function numberPyramid(input){
    let n = Number(input.shift());
    let curret = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows < n; rows++){
        for (let cols = 1; cols <=rows; cols++){
            if (curret > n){
                isBigger = true;
                break;
            }
            printCurrentLine += curret + " ";
            curret++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }
}

numberPyramid(["7"])