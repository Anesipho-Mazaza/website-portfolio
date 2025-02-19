document.addEventListener('DOMContentLoaded', function () {
    const chatbot = document.getElementById("chatbot");
    const openButton = document.createElement("button");
    openButton.textContent = "Open Chatbot";
    openButton.style.position = "fixed";
    openButton.style.bottom = "20px";
    openButton.style.right = "20px";
    openButton.style.padding = "10px";
    openButton.style.backgroundColor = "#3b7fbb";
    openButton.style.color = "white";
    openButton.style.border = "none";
    openButton.style.borderRadius = "5px";
    openButton.style.cursor = "pointer";

    // Add the open button to the page
    document.body.appendChild(openButton);

    // Open the chatbot
    openButton.addEventListener("click", function () {
        chatbot.style.display = "flex";  // Display the chatbot
        openButton.style.display = "none";  // Hide the open button
    });

    // Close the chatbot
    const closeButton = document.getElementById("chatbot-close");
    closeButton.addEventListener("click", function () {
        chatbot.style.display = "none";
        openButton.style.display = "block";  // Show the open button when closed
    });

    // Handle user input and bot response
    const sendButton = document.getElementById("send-message");
    const userInput = document.getElementById("user-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendUserMessage(userMessage);
            generateBotResponse(userMessage);
            userInput.value = "";
        }
    });

    // Function to append user message
    function appendUserMessage(message) {
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("user-message");
        userMessageElement.textContent = message;
        chatbotMessages.appendChild(userMessageElement);
        scrollToBottom();
    }

    // Function to append bot message
    function appendBotMessage(message) {
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("bot-message");
        botMessageElement.textContent = message;
        chatbotMessages.appendChild(botMessageElement);
        scrollToBottom();
    }

    // Scroll to the bottom to view new messages
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Bot's response logic
    function generateBotResponse(userMessage) {
        let response = "Sorry, I didn't understand that.";
        if (userMessage.includes("hello")) {
            response = "Hi! How can I help you today?";
        } else if (userMessage.includes("portfolio")) {
            response = "I can guide you through my portfolio. What would you like to see?";
        }
        appendBotMessage(response);
    }
});
