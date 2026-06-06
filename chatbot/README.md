# Chatbot - Bestcontent CP

Um chatbot moderno e responsivo para atender seus clientes no site Bestcontent CP.

## 📋 Features

✅ **Chat Widget** - Interface moderna e intuitiva  
✅ **FAQ Automático** - Respostas inteligentes para perguntas comuns  
✅ **Responsivo** - Funciona perfeitamente em mobile e desktop  
✅ **Animações** - Transições suaves e agradáveis  
✅ **Fácil Integração** - Basta incluir 2 arquivos no seu HTML  
✅ **Sem Dependências** - Puro JavaScript, HTML e CSS  

## 🚀 Como Usar

### 1. Adicionar ao seu site

Copie os 3 arquivos do chatbot para sua pasta:
```
seu-site/
├── index.html
├── chatbot/
│   ├── index.html
│   ├── style.css
│   └── chatbot.js
```

### 2. Incluir no seu HTML

Adicione isto no seu HTML principal (antes de fechar `</body>`):

```html
<iframe 
    src="chatbot/index.html" 
    style="position: fixed; bottom: 0; right: 0; width: 100%; height: 100%; border: none; z-index: 9999;">
</iframe>
```

Ou copie todo o conteúdo do `chatbot/index.html` diretamente no seu arquivo HTML.

### 3. Customizar Respostas

Edite o arquivo `chatbot.js` e modifique a seção `faqDatabase`:

```javascript
const faqDatabase = {
    'sua-palavra-chave': {
        response: 'Sua resposta aqui',
        keywords: ['palavra1', 'palavra2', 'palavra3']
    }
};
```

## 🎨 Personalização

### Cores
Edite `style.css` e procure por:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Troque as cores hex para suas cores preferidas.

### Mensagem Inicial
Edite `chatbot.js` e procure por:
```javascript
addMessage('💡 Dica: Pergunte sobre...', 'bot');
```

### Tamanho do Widget
Edite `style.css`:
```css
.chatbot-widget {
    width: 400px;  /* Mude aqui */
    height: 600px; /* E aqui */
}
```

## 📱 Perguntas Suportadas

O chatbot reconhece automaticamente perguntas sobre:
- Cursos disponíveis
- Preços e valores
- Certificados
- Duração dos cursos
- Suporte ao cliente
- Como se inscrever
- Material do curso
- Formas de pagamento
- Garantia de satisfação

## 🔄 Adicionar Novas Respostas

1. Abra `chatbot.js`
2. Encontre `faqDatabase`
3. Adicione um novo objeto:

```javascript
'novo-topico': {
    response: 'Resposta para o novo tópico',
    keywords: ['palavra-chave1', 'palavra-chave2']
}
```

## 🐛 Troubleshooting

**O chat não aparece?**
- Verifique se os caminhos dos arquivos estão corretos
- Certifique-se de que `style.css` e `chatbot.js` estão sendo carregados

**Respostas não aparecem?**
- Verifique o console do navegador (F12) para erros
- Certifique-se que as palavras-chave estão em lowercase

## 📞 Suporte

Para mais informações, visite: https://bestcontentcp-sooty.vercel.app

## 📄 Licença

Este projeto é de propriedade do Bestcontent CP.
