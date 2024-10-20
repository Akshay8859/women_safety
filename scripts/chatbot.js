// Sample AI response function
const chatOutput = document.querySelector('.chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to append messages to chat window
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
}

// Event listener for sending message
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        appendMessage(userMessage, 'user');
        userInput.value = ''; // Clear input field

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = "The chatbot construction is still under progress. After completion, this will prove to be an AI chatbot guiding the Indian Women, making the aware about their rights and legal strength.";
            appendMessage(aiResponse, 'bot');
        }, 1000); // Delay response for 1 second
    }
});
