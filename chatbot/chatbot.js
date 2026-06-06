// FAQ Database
const faqDatabase = {
    'oi': {
        response: 'Olá! Como você está? 😊 Em que posso ajudá-lo?',
        keywords: ['oi', 'olá', 'opa', 'e aí']
    },
    'cursos': {
        response: 'Oferecemos diversos cursos online! Temos cursos em: Web Development, Python, JavaScript, Design Gráfico e muito mais. Qual área te interessa?',
        keywords: ['cursos', 'qual curso', 'cursos disponíveis', 'que cursos']
    },
    'preco': {
        response: 'Nossos cursos têm preços a partir de R$ 49,90. Oferecemos planos mensais, trimestrais e anuais com descontos especiais. Quer mais detalhes?',
        keywords: ['preço', 'valor', 'custa', 'quanto custa', 'tabela de preços']
    },
    'certificado': {
        response: 'Sim! Todos os nossos alunos recebem um certificado reconhecido ao completar o curso. O certificado é válido em todo o Brasil.',
        keywords: ['certificado', 'certificação', 'diploma']
    },
    'duracao': {
        response: 'A duração dos cursos varia de 4 a 12 semanas, dependendo do curso escolhido. Você pode aprender no seu próprio ritmo!',
        keywords: ['duração', 'quanto tempo', 'semanas', 'meses']
    },
    'suporte': {
        response: 'Temos suporte 24/7 via chat, email e WhatsApp. Nossa equipe está sempre pronta para ajudar! 📞',
        keywords: ['suporte', 'ajuda', 'dúvida', 'problema', 'contato']
    },
    'inscricao': {
        response: 'Para se inscrever, basta: 1. Escolher um curso 2. Preencher seus dados 3. Fazer o pagamento 4. Acessar a plataforma! Pronto! 🎓',
        keywords: ['inscrição', 'como me inscrever', 'registrar', 'participar']
    },
    'material': {
        response: 'Todo o material do curso (vídeos, PDFs, exercícios) fica disponível na plataforma. Você pode acessar a qualquer hora!',
        keywords: ['material', 'conteúdo', 'aulas', 'vídeos']
    },
    'metodo_pagamento': {
        response: 'Aceitamos: Cartão de crédito, PIX, transferência bancária e boleto. Parcelamos em até 12x sem juros!',
        keywords: ['pagamento', 'como pagar', 'formas de pagamento', 'cartão', 'pix']
    },
    'garantia': {
        response: 'Oferecemos garantia de 7 dias! Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.',
        keywords: ['garantia', 'reembolso', 'devolver', 'satisfação']
    }
};

// DOM Elements
const chatWidget = document.getElementById('chatbot-widget');
const chatToggle = document.getElementById('chat-toggle');
const closeBtn = document.getElementById('close-btn');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Initialize
let isOpen = true;

// Event Listeners
chatToggle.addEventListener('click', toggleChat);
closeBtn.addEventListener('click', toggleChat);
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Toggle Chat
function toggleChat() {
    isOpen = !isOpen;
    chatWidget.style.display = isOpen ? 'flex' : 'none';
    chatToggle.classList.toggle('hidden', isOpen);
}

// Send Message
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Simulate typing
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

// Add Message to Chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    const timeDiv = document.createElement('small');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getTime();

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeDiv);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate Response
function generateResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Check for FAQ matches
    for (const [key, faq] of Object.entries(faqDatabase)) {
        if (faq.keywords.some(keyword => normalizedMessage.includes(keyword))) {
            return faq.response;
        }
    }

    // Default responses
    const defaultResponses = [
        'Entendi sua pergunta! Pode me dar mais detalhes?',
        'Essa é uma ótima pergunta! Para mais informações, entre em contato conosco. 📧',
        'Desculpe, não tenho a resposta para isso no momento. Nosso time de suporte pode ajudar! 😊',
        'Obrigado pela pergunta! Posso ajudar com informações sobre cursos, preços ou inscrição?'
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Get Current Time
function getTime() {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Initial message
setTimeout(() => {
    addMessage('💡 Dica: Pergunte sobre cursos, preços, certificados, suporte ou como se inscrever!', 'bot');
}, 1500);
