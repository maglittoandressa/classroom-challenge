let counter = 0;

function incrementCounter() {
    if (counter < 5) {
        ++counter;
    }
}

incrementCounter();
incrementCounter();

console.log(counter);
