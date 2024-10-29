function dancehall(input) {
    let index = 0;
    let L = Number(input[index]);
    index++;
    let W = Number(input[index]);
    index++;
    let A = Number(input[index]);

    let RoomSize = (L * 100) * (W * 100);
    let wardrobe = A * 100 * A  * 100;
    let bench = RoomSize / 10;
    let freeRoom = RoomSize - wardrobe - bench;

    let dancers = Math.floor(freeRoom / (40 + 7000));


    // 1.	L – дължина на залата в метри – реално число в интервала  [10.00 … 100.00]
    // 2.	W – ширина на залата в метри – реално число в интервала  [10.00 … 100.00]
    // 3.	А – страна на гардероба в метри – реално число в интервала [2.00… 20.00]
    
    console.log(dancers);
}

dancehall([50,25,2]);