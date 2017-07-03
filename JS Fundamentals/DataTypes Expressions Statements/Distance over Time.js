function calc([speed1, speed2, time]) {
    let dist1 = (speed1 / 3.6) * time;
    let dist2 = (speed2 / 3.6) * time;
    console.log(Math.abs(dist1 - dist2));
}

calc([0, 60, 3600]);