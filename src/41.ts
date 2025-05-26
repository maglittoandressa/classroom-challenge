function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, c = 0;
    while (c < n) {
        let temp = c;
        c = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Generate random number between 1 and 10
function getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max - 1 + 1)) + (max - 1);
}
