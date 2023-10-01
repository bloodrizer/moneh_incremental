import Wage from "./wage";

class Game {
    date: number = Date.now();
    money: number = 0;
    wage: Wage;

    country = "United States";

    constructor() {
        this.wage = new Wage();
    }

    update(){
        const timeDelta = 1000 * 60 * 7.5;
        const HOUR = 3600000;

        this.date += timeDelta;

        const hourlyWage = this.wage.getWage(this.country);
        const WORKING_HOURS = 8;

        this.money += (timeDelta / HOUR) * (WORKING_HOURS / 24) * hourlyWage 
    }
}

export default Game;