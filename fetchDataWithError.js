const fetchDataWithError = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldFail = Math.random() > 0.5;
        if (shouldFail) {
            reject(new Error("Failed to fetch data"));
        } else {
            resolve([
                "Task 1: Wash the dishes",
                "Task 2: Take out the trash",
                "Task 3: Write the report",
                "Task 4: Prepare lunch",
                "Task 5: Attend the meeting"
            ]);
        }
    }, 2000);
});

async function awaitCall() {
    try {
        const data = await fetchDataWithError();
        data.forEach(task => console.log(task));
    } catch (error) {
        console.log("Error fetching data: ", error.message);
    }
}

// Example usage
awaitCall();

