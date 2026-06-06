# 🤖 Chatbot Bestcontent CP - Guia de Integração Rápida

## ⚡ Integração em 3 passos

### 1️⃣ Copiar arquivos
```
seu-site/
├── index.html
├── chatbot/
│   ├── index.html
│   ├── style.css
│   └── chatbot.js
```

### 2️⃣ Adicionar ao HTML
Coloque isto antes de `</body>`:
```html
<link rel="stylesheet" href="chatbot/style.css">
<script src="chatbot/chatbot.js"></script>
```

### 3️⃣ Pronto! 🎉
O chatbot aparecerá como um ícone flutuante no canto inferior direito.

---

## 🎨 Customização Rápida

### Mudar cores
Edite `chatbot/style.css`:
```css
/* Altere estas cores */
background: linear-gradient(135deg, #SEU_COR1 0%, #SEU_COR2 100%);
```

### Adicionar respostas
Edite `chatbot/chatbot.js`, procure `faqDatabase`:
```javascript
'seu-topico': {
    response: 'Sua resposta aqui',
    keywords: ['palavra1', 'palavra2', 'palavra3']
}
```

### Mudar tamanho do chat
Edite `chatbot/style.css`:
```css
.chatbot-widget {
    width: 400px;   /* Altere aqui */
    height: 600px;  /* E aqui */
}
```

---

## 🧪 Testando

1. Abra seu site
2. Procure pelo ícone de chat (💬) no canto inferior direito
3. Digite uma pergunta: "cursos", "preço", "como me inscrever"
4. Veja a resposta automática aparecer!

---

## 📱 Perguntas que funcionam

| Pergunta | Resposta |
|----------|----------|
| "cursos" | Lista de cursos disponíveis |
| "preço" | Informações de preços |
| "certificado" | Info sobre certificação |
| "duração" | Tempo dos cursos |
| "inscrição" | Como se inscrever |
| "pagamento" | Formas de pagamento |
| "suporte" | Informações de suporte |
| "material" | Sobre o conteúdo |
| "garantia" | Garantia e reembolso |

---

## 🚀 Deploy

Após customizar, faça:
1. Commit as mudanças
2. Push para `main`
3. Deploy seu site normalmente

O chatbot funciona em qualquer servidor!

---

## 📞 Suporte

Para mais informações: https://bestcontentcp-sooty.vercel.app

---

## 📄 Estrutura dos arquivos

```
chatbot/
├── index.html              # Interface do chat
├── style.css              # Estilos (customizável)
├── chatbot.js             # Lógica e respostas (customizável)
├── README.md              # Documentação completa
├── QUICK-START.md         # Este arquivo
└── exemplo-integracao.html # Página de exemplo
```

---

## ✅ Checklist de integração

- [ ] Copiei os arquivos para meu projeto
- [ ] Adicionei o link CSS e script no HTML
- [ ] Testei o chatbot no navegador
- [ ] Customizei as cores/respostas
- [ ] Fiz commit das mudanças
- [ ] Deploy no servidor

---

**Tudo pronto? O seu chatbot está online! 🎉**
