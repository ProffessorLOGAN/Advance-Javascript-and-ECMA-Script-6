const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Tansen');
greeterHey('Keshri');

greet('hello')('tansen');

//Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Tansen');