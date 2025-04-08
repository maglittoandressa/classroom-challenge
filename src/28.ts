function sumEvenNumbers(numbers: number[]): number {
    let sum = 0;
    numbers.forEach(num => {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output: 6
