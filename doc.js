

// Initialize an array to store scheduled times
const scheduledTimes = [];

// Function to add a scheduled time to the array and display it
function addScheduledTime(time) {
    scheduledTimes.push(time);
    displayScheduledTimes();
}

// Function to remove a scheduled time from the array and display updated list
function removeScheduledTime(index) {
    scheduledTimes.splice(index, 1);
    displayScheduledTimes();
}

// Add an event listener for the "Feed now" button
document.getElementById('feednowBtn').addEventListener('click', function () {
    const currentFeedTime = new Date().toLocaleString();
    addScheduledTime(`Fed At: ${currentFeedTime}`);
});

// Add an event listener for the "Schedule" button
document.getElementById('scheduleBtn').addEventListener('click', function () {
    const selectedDateTime = document.getElementById('getdt').value;

    // Add the selected time to the scheduledTimes array
    addScheduledTime(selectedDateTime);

    // Send selectedDateTime to Firebase here
    // You'll need to use Firebase functions for this part
});

// Function to display all scheduled times
function displayScheduledTimes() {
    const scheduledTimesContainer = document.getElementById('scheduledTimes');
    scheduledTimesContainer.innerHTML = ''; // Clear existing content

    scheduledTimes.forEach((time, index) => {
        const scheduleElement = document.createElement('div');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Del';
        deleteButton.classList.add('delete-button');

        // Add an event listener to delete the scheduled time
        deleteButton.addEventListener('click', () => {
            removeScheduledTime(index);
        });

        // Display the scheduled time along with the delete button
        scheduleElement.textContent = time;
        scheduleElement.appendChild(deleteButton); // Place the "Del" button on the right

        scheduledTimesContainer.appendChild(scheduleElement);
    });
}
