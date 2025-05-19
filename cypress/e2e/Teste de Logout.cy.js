describe('Logout', () => {
  it('Deve permitir que o usuário faça logout corretamente', () => {
    // Fazer login com credenciais válidas primeiro
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
    // Verificar que o usuário está no dashboard
    cy.url().should('include', '/dashboard');
    
    // Realizar o logout
cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar erros relacionados à resposta não definida
  if (err.message.includes('Cannot read properties of undefined (reading \'response\')')) {
    return false;  // Retornar false ignora o erro e continua o teste
  }
  return true;  // Se não for esse erro, o Cypress vai falhar o teste
});

  });
});
