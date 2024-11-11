function cruiseGames(input) {
    let name = input.shift();
    let countGame = Number(input.shift());
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;
    let counterVolleyballGame = 0;
    let counterTennisGame = 0;
    let counterBadmintoneGame = 0;

    for (let i = 0; i < countGame; i++) {
        let gameName = input.shift();
        let score = Number(input.shift());

        switch (gameName) {
            case "volleyball":
                volleyballPoints += score * 1.07;
                counterVolleyballGame++;
                break;
            case "tennis":
                tennisPoints += score * 1.05;
                counterTennisGame++;
                break;
            case "badminton":
                badmintonPoints += score * 1.02;
                counterBadmintoneGame++;
                break;
        }
    }

    let averageVolleyballPoints = Math.floor(volleyballPoints / counterVolleyballGame);
    let averageTennisPoints = Math.floor(tennisPoints / counterTennisGame);
    let averageBadmintonPoints = Math.floor(badmintonPoints / counterBadmintoneGame);

    let totalPoints = volleyballPoints + tennisPoints + badmintonPoints;

    if (averageBadmintonPoints >= 75 && averageTennisPoints >= 75 && averageVolleyballPoints >= 75) {
        console.log(`Congratulations ${name}! You wont the cruise games with ${Math.floor(totalPoints)} points.`);
    }
    else {
        console.log(`Sorry ${name}, you lost. Your points are only ${Math.floor(totalPoints)}.`)
    }
}

cruiseGames([
    "Pepi",
    "3",
    "volleyball",
    "78",
    "tennis",
    "98",
    "badminton",
    "105"
]);
