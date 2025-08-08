// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav-links');
    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    }
});

// Chatbot functionality

        document.addEventListener('DOMContentLoaded', function() {
            const chatbotToggle = document.getElementById('chatbot-toggle');
            const chatbotContainer = document.getElementById('chatbot-container');
            const chatbotClose = document.getElementById('chatbot-close');
            const chatbotSend = document.getElementById('chatbot-send');
            const chatbotInput = document.getElementById('chatbot-input');
            const chatbotMessages = document.getElementById('chatbot-messages');
            
            // Toggle chatbot visibility
            chatbotToggle.addEventListener('click', function() {
                chatbotContainer.classList.toggle('hidden');
            });
            
            // Close chatbot
            chatbotClose.addEventListener('click', function() {
                chatbotContainer.classList.add('hidden');
            });
            
            // Send message
            chatbotSend.addEventListener('click', sendMessage);
            chatbotInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            function sendMessage() {
                const message = chatbotInput.value.trim();
                if (message) {
                    // Add user message
                    addMessage(message, 'user');
                    chatbotInput.value = '';
                    
                    // Simulate bot response
                    setTimeout(() => {
                        const botResponse = getBotResponse(message);
                        addMessage(botResponse, 'bot');
                    }, 500);
                }
            }
            
            function addMessage(text, sender) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('mb-4');
                
                if (sender === 'user') {
                    messageDiv.classList.add('text-right');
                    messageDiv.innerHTML = `
                        <div class="bg-red-100 text-gray-800 rounded-lg p-3 inline-block max-w-xs">
                            <p>${text}</p>
                        </div>
                    `;
                } else {
                    messageDiv.innerHTML = `
                        <div class="bg-gray-100 rounded-lg p-3 inline-block max-w-xs">
                            <p>${text}</p>
                        </div>
                    `;
                }
                
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
            
            function getBotResponse(userMessage) {
                const lowerMessage = userMessage.toLowerCase();
                
                if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
                    return "The Ducati V4 models start at $21,895.00 for the Streetfighter V4, $25,995.00 for the Panigale V4, and $100,000.00 for the Superleggera  V4. Would you like more specific pricing information?";
                } else if (lowerMessage.includes('spec') || lowerMessage.includes('feature')) {
                    return "The Ducati V4 features a 90° V4 engine with counter-rotating crankshaft, producing between 170-214 hp depending on the model. All V4 models come with advanced electronics including cornering ABS, traction control, and multiple riding modes. Which specific model are you interested in?";
                } else if (lowerMessage.includes('test ride') || lowerMessage.includes('ride')) {
                    return "You can schedule a test ride at your nearest authorized Ducati dealer. Would you like me to help you find a dealer near you?";
                } else if (lowerMessage.includes('dealer') || lowerMessage.includes('location')) {
                    return "Ducati has dealers worldwide. You can find your nearest dealer by visiting our website or by providing your location (city/state or zip code) and I can help locate one for you.";
                } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                    return "Hello! How can I assist you with Ducati V4 motorcycles today?";
                } else if (lowerMessage.includes('thank')) {
                    return "You're welcome! Is there anything else I can help you with regarding Ducati V4 motorcycles?";
                } else if (lowerMessage.includes('panigale')) {
                    return "The Panigale V4 is our track-focused superbike with 214 hp, aerodynamic winglets, and race-derived electronics. It's available in standard, S, and Speciale versions. Would you like details on a specific version?";
                } else if (lowerMessage.includes('streetfighter')) {
                    return "The Streetfighter V4 is the naked version of our Panigale V4, with 208 hp and aggressive styling. It's available in standard and S versions. Would you like to know more about its features?";
                } else if (lowerMessage.includes('Superleggera')) {
                    return "The Multistrada V4 is our adventure touring model with 170 hp from the V4 Granturismo engine. It features advanced rider aids, semi-active suspension, and long-distance comfort. Would you like information on available packages?";
                } else {
                    return "I'm here to help with information about Ducati V4 motorcycles. You can ask about models, specifications, pricing, test rides, or dealer locations. What would you like to know?";
                }
            }
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });