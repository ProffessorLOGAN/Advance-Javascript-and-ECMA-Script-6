const runOnce = function () {
    console.log('This will run Once');
};

runOnce();

// IIFE
(function () {
    console.log('This will run again 123!');
    const isPrivate = 50;
})();

{
    var isPrivate = 100;
}

console.log(isPrivate);