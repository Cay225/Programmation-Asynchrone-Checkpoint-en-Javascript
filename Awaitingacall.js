const fetchData = () => new Promise(resolve => {
    setTimeout(() => resolve([
        "Task 1: Wash the dishes",
        "Task 2: Take out the trash",
        "Task 3: Write the report",
        "Task 4: Prepare lunch",
        "Task 5: Attend the meeting"
    ]), 2000);
});

async function awaitCall() {
    const data = await fetchData();
    data.forEach(task => console.log(task));
}

// Example usage
awaitCall();
