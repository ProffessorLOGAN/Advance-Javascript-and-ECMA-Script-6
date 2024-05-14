const airIndia = {
    airline: 'AirIndia airlines',
    code: 'IN',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`);
        this.bookings.push({ flight: `${this.code}${this.flightNum}`, name })
    },
};

airIndia.book(239, 'Tansen Keshri');
airIndia.book(657, 'John Wick');
console.warn(airIndia);

const airWays = {
    airline: 'Airways airlines',
    code: 'AW',
    bookings: [],

}

const book = airIndia.book;
//Doesn't work
// book(23,'John Cena');

//Call method
book.call(airWays, 24, 'John Cena');
console.warn(airWays);

const swiss = {
    airline: 'Swiss Air Lines',
    code: 'SA',
    bookings: [],
};

book.call(swiss, 769, 'Taylor Swift');
console.warn(swiss);

//Apply Method

const flightData = [543,'Narendra Modi'];
book.apply(swiss,flightData);
console.warn(swiss);