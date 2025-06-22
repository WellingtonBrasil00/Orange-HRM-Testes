🚀 Orange-HRM-Testes
Automação de testes para o sistema OrangeHRM usando Cypress — garantindo qualidade, estabilidade e agilidade no seu fluxo de trabalho! ⚙️✨

🎯 Descrição
Este projeto contém scripts automatizados para validar funcionalidades essenciais do OrangeHRM, focando em testes end-to-end com Cypress para garantir que tudo funcione perfeitamente! 🧪✅

🛠 Tecnologias
💻 JavaScript

🧪 Cypress

⚡ Teste de Login (Exemplo)
javascript
Copiar
Editar
describe('🔥 Teste de Login', () => {
  it('✅ Deve logar com credenciais válidas', () => {
    cy.visit('URL_DO_SEU_SISTEMA') // 🔗 Acesse a página de login
    cy.get('input[name="username"]').type('seu_usuario') // 👤 Digite o usuário
    cy.get('input[name="password"]').type('sua_senha')   // 🔒 Digite a senha
    cy.get('button[type="submit"]').click()              // 🚀 Clique em entrar
    cy.url().should('not.include', '/login')             // ✔️ Verifica que não está mais na página de login
    cy.contains('Dashboard').should('exist')             // 🏠 Confirma que o dashboard está visível
  })
})
⚙️ Como usar
Pré-requisitos
📦 Node.js (v14+)

📦 npm

Passos para rodar
bash
Copiar
Editar
git clone https://github.com/WellingtonBrasil00/Orange-HRM-Testes.git
cd Orange-HRM-Testes
npm install
npx cypress open  # para abrir a interface gráfica e rodar os testes
💡 Dicas
Customize a URL e os seletores no código acima para seu ambiente!

Quer mais exemplos de testes? Me avise! 😉

📝 Licença
MIT © Wellington Brasil

![Captura de Tela (25)](https://github.com/user-attachments/assets/192d7f98-8b0e-4e5d-8ef1-5c8167b33bd1)
