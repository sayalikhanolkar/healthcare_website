// Add Reminder Functionality
document.getElementById('add-reminder').addEventListener('click', () => {
    const reminderText = prompt("Enter your reminder:");
    if (reminderText) {
      const reminderList = document.getElementById('reminder-list');
      const newReminder = document.createElement('div');
      newReminder.className = 'reminder';
      newReminder.innerHTML = `
        <input type="checkbox" id="reminder${reminderList.children.length + 1}">
        <label for="reminder${reminderList.children.length + 1}">${reminderText}</label>
      `;
      reminderList.appendChild(newReminder);
    }
  });
  
  // Q&A Form Submission
  document.getElementById('question-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const question = document.getElementById('question-input').value;
    if (question) {
      alert("Your question has been submitted!");
      document.getElementById('question-input').value = '';
    }
  });