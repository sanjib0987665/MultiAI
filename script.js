
document.addEventListener('DOMContentLoaded', function() {
    const botCards = document.querySelectorAll('.bot-card');
    const chatInterface = document.getElementById('chat-interface');
    const currentBotName = document.getElementById('current-bot-name');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const backBtn = document.getElementById('back-btn');
    const botGrid = document.querySelector('.bot-grid');
    const welcomeText = document.querySelector('h1');
    const welcomeDesc = document.querySelector('p');
    
    let selectedBot = null;
    
    const botPersonalities = {
        astrologer: {
            name: "Astrologer Bot 🔮",
            responses: [
                "The stars whisper secrets of your destiny... What would you like to know about your cosmic journey?",
                "I sense powerful energies surrounding you today. The universe has messages for you!",
                "Your celestial alignment reveals fascinating insights. Let me read the cosmic signs for you...",
                "The planets are dancing in harmony today! What aspect of your life shall we explore through the stars?",
                "Mercury is in retrograde, but your intuition is crystal clear. What guidance do you seek from the cosmos?",
                "The moon's energy is calling to you... I can feel the vibrations of change in your aura!",
                "Your zodiac sign holds ancient wisdom. Let me unveil what the universe has planned for you!"
            ]
        },
        tutor: {
            name: "Study Mentor 👨‍🏫",
            responses: [
                "Fantastic question! Learning is a beautiful journey, and I'm here to guide you every step of the way.",
                "You're making excellent progress! Remember, every expert was once a beginner.",
                "That's a brilliant observation! Let's dive deeper into this concept together.",
                "Don't worry about mistakes - they're stepping stones to mastery! Let's work through this.",
                "Your curiosity is your greatest strength! Let's explore this topic from a new angle.",
                "I can see you're really thinking critically about this. That's the mark of a true scholar!",
                "Knowledge is power, and you're building an incredible foundation. Keep asking great questions!"
            ]
        },
        creative: {
            name: "Creative Muse 🎨",
            responses: [
                "Your imagination is a canvas waiting for brilliant colors! What masterpiece shall we create today?",
                "I feel the spark of creativity flowing through you! Let's turn that inspiration into art.",
                "Every great story begins with a single word, every masterpiece with a single stroke. What's yours?",
                "The muse is singing today! Your creative energy is absolutely electric right now.",
                "Art is the language of the soul, and I can hear yours speaking beautifully!",
                "Creativity knows no bounds when the heart is open. What vision is calling to you?",
                "You have the power to bring new worlds to life! Let's explore the depths of your imagination."
            ]
        },
        tech: {
            name: "Tech Wizard 🚀",
            responses: [
                "Ah, a technical challenge! My circuits are buzzing with excitement to solve this with you.",
                "Don't worry, every bug is just a feature waiting to be discovered! Let's debug this together.",
                "Technology is magic when it works, and I'm your friendly wizard to make it happen!",
                "I've analyzed thousands of similar cases. Let me share the most elegant solution with you.",
                "Code is poetry, and sometimes we just need to find the right rhythm. Let's make it sing!",
                "Your tech journey is inspiring! Every problem you solve makes you a stronger developer.",
                "Innovation starts with curiosity, and you've got plenty of it! Let's build something amazing."
            ]
        },
        wellness: {
            name: "Wellness Guide 🧘‍♀️",
            responses: [
                "Take a deep breath... Feel that? That's your inner peace calling. How can I help you find balance today?",
                "Your wellbeing is a garden that needs daily tending. What would you like to nurture today?",
                "I sense you're ready for positive transformation. Let's explore what your body and mind need.",
                "Wellness is not a destination, it's a beautiful journey. Where shall we focus our energy?",
                "Your inner wisdom knows exactly what you need. Let me help you listen to its gentle whispers.",
                "Mind, body, and spirit are dancing together. How can we help them find perfect harmony?",
                "Every moment is a chance to choose wellness. What mindful step would you like to take today?"
            ]
        },
        adventure: {
            name: "Adventure Buddy 🗺️",
            responses: [
                "Pack your curiosity and let's explore! The world is full of incredible discoveries waiting for us.",
                "Adventure is calling, and I hear it loud and clear! Where shall our journey take us today?",
                "Every path leads to new experiences. What horizon are you eager to explore?",
                "The best adventures start with a single step into the unknown. Are you ready to take yours?",
                "I can smell the excitement in the air! What kind of adventure is stirring your wanderlust?",
                "From hidden gems to grand expeditions, I know all the secret paths. Where shall we venture?",
                "Life is the greatest adventure of all! Let's make your next chapter absolutely legendary."
            ]
        }
    };
    
    // Bot selection functionality
    botCards.forEach(card => {
        card.addEventListener('click', function() {
            const botType = this.dataset.bot;
            selectBot(botType);
        });
    });
    
    function selectBot(botType) {
        selectedBot = botType;
        const bot = botPersonalities[botType];
        
        // Hide bot selection
        botGrid.style.display = 'none';
        welcomeText.style.display = 'none';
        welcomeDesc.style.display = 'none';
        
        // Show chat interface
        chatInterface.classList.remove('hidden');
        currentBotName.textContent = bot.name;
        
        // Clear previous messages and add welcome message
        chatMessages.innerHTML = '';
        if (botType === 'astrologer') {
            addBotMessage(`🌟 Greetings, seeker of cosmic wisdom! I am your ${bot.name}. The universe has guided you to me for a reason. What mysteries of the stars shall we unveil together? ✨`);
        } else {
            addBotMessage(`Hello! I'm your ${bot.name}. How can I help you today?`);
        }
        
        userInput.focus();
    }
    
    // Chat functionality
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        addUserMessage(message);
        userInput.value = '';
        
        // Simulate bot response after a short delay
        setTimeout(() => {
            const responses = botPersonalities[selectedBot].responses;
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addBotMessage(randomResponse);
        }, 1000);
    }
    
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Back button functionality
    backBtn.addEventListener('click', function() {
        // Hide chat interface
        chatInterface.classList.add('hidden');
        
        // Show bot selection
        botGrid.style.display = 'grid';
        welcomeText.style.display = 'block';
        welcomeDesc.style.display = 'block';
        
        selectedBot = null;
    });
    
    console.log('Bot selection app loaded successfully!');
});
