const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await delay(1000);
        console.log(value);
    }
}

// Example usage with real values
const tasks = [
    "Task 1: Wash the dishes",
    "Task 2: Take out the trash",
    "Task 3: Write the report",
    "Task 4: Prepare lunch",
    "Task 5: Attend the meeting"
];

iterateWithAsyncAwait(tasks);
