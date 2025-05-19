let counter = 0;
function loop() {
    if (counter === 10) {
        console.log('Loop finished');
        return;
    }
    setTimeout(loop, 100);
    ++counter;
}
loop();
