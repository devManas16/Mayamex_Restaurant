document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatPanel = document.getElementById('chat-panel');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatActionBtns = document.querySelectorAll('.chat-action-btn');

    let chatHistory = [];

    const knowledgeBase = {
        "bread": "Our freshly baked Italian bread with herb butter — $5. A perfect starter! 🔥 Popular with almost every table.",
        "shrimp scampi": "Garlic butter shrimp scampi served over linguine — $22. One of our most loved seafood dishes! ⭐⭐",
        "lasagna": "Our signature slow-baked lasagna with ricotta, mozzarella, and house marinara — $18. CUSTOMER FAVORITE! ⭐⭐⭐",
        "caesar salad": "Crisp romaine with house-made Caesar dressing, croutons, and Parmesan — $12. A classic side or starter."
    };

    // Toggle Chat
    chatToggle.addEventListener('click', () => {
        chatPanel.classList.toggle('hidden');
        if (!chatPanel.classList.contains('hidden') && chatHistory.length === 0) {
            addBotMessage("Welcome to Capri By Mayamex! 🍝 Ask me about our menu, specials, or book a table!");
        }
    });

    chatClose.addEventListener('click', () => {
        chatPanel.classList.add('hidden');
    });

    // Send Message
    const handleSend = () => {
        const text = chatInput.value.trim();
        if (text) {
            addUserMessage(text);
            chatInput.value = '';
            processQuery(text);
        }
    };

    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Action Buttons
    chatActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            if (action === 'reserve') {
                addUserMessage("I'd like to reserve a table.");
                setTimeout(() => addBotMessage("Great! You can book directly on our website or call us at (555) 123-4567. Looking forward to seeing you!"), 500);
            } else if (action === 'order') {
                addUserMessage("I'd like to order online.");
                setTimeout(() => addBotMessage("Excellent choice! Our full menu is available for pickup and delivery via our partner apps."), 500);
            }
        });
    });

    function addUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message user';
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
        logInteraction('user', text);
    }

    function addBotMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message bot';
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
        logInteraction('bot', text);
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.textContent = 'Capri Assistant is typing...';
        chatMessages.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    function processQuery(query) {
        showTypingIndicator();
        
        // Simulate "AI" thinking
        setTimeout(() => {
            removeTypingIndicator();
            const lowerQuery = query.toLowerCase();
            let response = "I'd love to help! You can ask about our Bread, Shrimp Scampi, Lasagna, or Caesar Salad — or tap 'Reserve a Table' below!";

            for (const key in knowledgeBase) {
                if (lowerQuery.includes(key)) {
                    response = knowledgeBase[key];
                    break;
                }
            }
            
            addBotMessage(response);
        }, 1000);
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function logInteraction(role, content) {
        chatHistory.push({
            role,
            content,
            timestamp: new Date().toISOString()
        });
        console.log('Interaction logged:', chatHistory[chatHistory.length - 1]);
    }
});
