'use strict';

const flight = 'IN123';
const tansen = {
    name : 'Tansen Keshri',
    passport: 123456789
}

const checkIn = function(flightNum , passenger){
    flightNum = 'IN321';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 123456789){
        console.warn('Checked In');
    } else{
        console.warn('Wrong password!!');
    }
};

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000);
}

newPassport(tansen);

checkIn(flight , tansen);
console.log(flight);
console.log(tansen);