
export class Day {
    date: Date;
    hour: number;
    constructor () {
        this.date = new Date();
        this.hour = this.date.getHours();
    }
    isOpeningHour () {
        return (this.hour >= 8 && this.hour < 18); 
    }
    getMessage () {
        return (this.isOpeningHour() ? "We're opened" : "We're closed"); 
    }
}