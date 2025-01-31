function RadiansToDegrees(radian) {
    radian = Number(radian)
    let degrees = radian * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}

RadiansToDegrees(3.1416);