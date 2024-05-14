'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // ES5
    // numPassengers =numPassengers || 1;
    // price = price || 199 ;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('IN123');
createBooking('IN123',2,499);
createBooking('IN123',2);