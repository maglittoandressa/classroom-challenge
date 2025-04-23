function add(x: number, y: number): number {
  return x + y;
}

console.log(add(3, 5)); // Outputs: 8

// Example of using async/await to handle asynchronous operations in TypeScript
async function performTask(taskName: string, data: any) {
  console.log(`Executing ${taskName} with data: ${data}`);
  
  try {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay of 5 seconds

    if (Array.isArray(data)) {
      const result = data.map(item => add(1, item)).join(', ');
      console.log(result);
    } else {
      console.log(`Task ${taskName} did not return an array.`);
    }
  } catch (error) {
    console.error('Error executing task:', error);
  }
}

performTask('add', [10, 20]);
