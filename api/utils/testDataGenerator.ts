export class TestDataGenerator {

    static names = ["Nikhil", "Kalpesh", "Aryan", "Jyoti", "Ankit", "Rushikesh"];

    static cities = [
        { address: "P NO 21  Main St", city: "Salt Lake City", zip: "84101", state: "UT" },
        { address: "P NO 22  Main St", city: "Dallas", zip: "75201", state: "TX" },
        { address: "P NO 23  Main St", city: "Miami", zip: "33101", state: "FL" },
        { address: "P NO 24  Main St", city: "Phoenix", zip: "85001", state: "AZ" },
        { address: "P NO 25  Main St", city: "Denver", zip: "80201", state: "CO" }
    ];

    static getRandomName() {
        return this.names[Math.floor(Math.random() * this.names.length)];
    }

    static generateEmail() {
        const random = Math.floor(1000 + Math.random() * 9000);
        return `nikhil.badgujar+${random}@tudip.com`;
    }

    static getRandomCity() {
        return this.cities[Math.floor(Math.random() * this.cities.length)];
    }

    static generateDOB(minAge = 5, maxAge = 60) {
        const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

        const today = new Date();
        const birthYear = today.getFullYear() - age;

        const month = Math.floor(Math.random() * 12);
        const day = Math.floor(Math.random() * 28) + 1;

        const dob = new Date(birthYear, month, day);

        return {
            dob: dob.toISOString(),
            age
        };
    }
    
    static generatePhone() {
        const firstDigit = Math.floor(Math.random() * 9) + 1; // avoid starting with 0
        const remaining = Math.floor(100000000 + Math.random() * 900000000);
        return `${firstDigit}${remaining}`;
    }


}