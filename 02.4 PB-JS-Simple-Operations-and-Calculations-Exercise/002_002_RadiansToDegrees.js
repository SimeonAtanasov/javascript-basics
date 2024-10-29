function RadiansToDegrees(radian) {
    radian = Number(radian)
    let degrees = radian * 180 / Math.PI;
    console.log(degrees);
}

RadiansToDegrees(3.1416)