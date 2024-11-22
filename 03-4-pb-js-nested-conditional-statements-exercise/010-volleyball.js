function volleyball(year, holidaysNotSatorSun, weekendsTravelToHome) {
    holidaysNotSatorSun = Number(holidaysNotSatorSun);
    weekendsTravelToHome = Number(weekendsTravelToHome);

    let weekendsAtSofia = 48 - weekendsTravelToHome;
    let saturdayGamesAtSofia = weekendsAtSofia * 3/4;
    let HolidaysAtSofia = holidaysNotSatorSun * 2/3;
    let totalGames = saturdayGamesAtSofia + weekendsTravelToHome + HolidaysAtSofia;

    if(year === "leap"){
        let additionalGames = 0.15 * totalGames;
        let total = totalGames + additionalGames;
        console.log(Math.floor(total));
    }
    else {
        console.log(Math.floor(totalGames));
    }


}

volleyball("leap", "5", "2");