const massMark = 78;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = () => {
    if (BMIMark > BMIJohn) {
        return true;
    } else {
        return false;
    }
}

console.log(markHigherBMI);