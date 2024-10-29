function worldSwimmingRecord(recordsSeconds, distanceMeters, secondsPerMeter) {
    recordsSeconds = Number(recordsSeconds);
    distanceMeters = Number(distanceMeters);
    secondsPerMeter = Number(secondsPerMeter);

    let drag = Math.floor(distanceMeters / 15) * 12.5;
    let IvanTime = (distanceMeters * secondsPerMeter) + drag;

    if (IvanTime < recordsSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${IvanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(IvanTime - recordsSeconds).toFixed(2)} seconds slower.`);

    }
}

worldSwimmingRecord(55555.67, 3017, 5.03);