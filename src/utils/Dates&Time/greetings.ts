
export class Greeting {
    currentTime: Date;
    currentHour: number;
    greeting: string;
    constructor () {
        this.currentTime = new Date();
        this.currentHour = this.currentTime.getHours();
        this.greeting = "";
    }
    getGreeting() {
        if (this.currentHour >= 0 && this.currentHour <12) {
            this.greeting = "Good Morning";
        }
        if (this.currentHour >= 12 && this.currentHour < 18) {
            this.greeting = "Good Afternoon";
        };
        if (this.currentHour >= 18 && this.currentHour <23) {
            this.greeting = "Good Evening";
        }
        return this.greeting;       
    }
    greetUser(username: string) {
        const userGreeting = this.getGreeting();
        return `${userGreeting}, ${username}`;
    }
}
