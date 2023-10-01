class Game {
    date: number = Date.now();
    money: number = 0;

    constructor() {
    }

    update(){
        const timeDelta = 1000 * 60 * 7.5;
        const HOUR = 3600000;

        this.date += timeDelta;

        const hourlyWage = 15;
        const WORKING_HOURS = 8;

        this.money += (timeDelta / HOUR) * (WORKING_HOURS / 24) * hourlyWage 
    }
}

export default Game;