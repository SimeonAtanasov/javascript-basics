function cinemaTickets(input){
    let film = input.shift();

    let totalSoldTickets = 0;
    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidsTickets = 0;

    while(film !== "Finish"){
        let capacity = Number(input.shift());
        let ticket = input.shift();
        let soldTickets = 0;

        let student = 0;
        let standard = 0;
        let kids = 0;

        while ((ticket !== "End") && (soldTickets < capacity)){
            switch(ticket){
                case "student":
                    student++;
                    break;
                case "standard":
                    standard++;
                    break;
                case "kid":
                    kids++;
                    break;
            }
            soldTickets++;
            ticket = input.shift();
        }
        let capacityPercentage = (soldTickets / capacity) * 100;
        console.log(`${film} - ${capacityPercentage.toFixed(2)}% full.`);

        totalSoldTickets += (student + standard  + kids);
        totalStudentTickets += student;
        totalStandardTickets += standard;
        totalKidsTickets += kids;

        if(ticket === "Finish"){
            break;
        } else if (soldTickets  < capacity){
            film = input.shift();
        } else {
            film = ticket;
        }

    }    
    console.log(`Total ticket: ${totalSoldTickets}`);

    console.log(`${((totalStudentTickets / totalSoldTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandardTickets / totalSoldTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKidsTickets / totalSoldTickets)*100).toFixed(2)}% kids tickets.`);
}


cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
    ])