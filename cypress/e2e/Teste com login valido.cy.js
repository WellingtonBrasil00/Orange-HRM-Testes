describe('Login - Teste Válido', () => {
  it('Deve permitir login com credenciais válidas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Inserir credenciais válidas
    cy.get('input[name="username"]').type('Admin'); // Username
    cy.get('input[name="password"]').type('admin123'); // Senha
    
    // Clicar no botão de login
    cy.get('button[type="submit"]').click();
    
    // Verificar redirecionamento para o dashboard após login
    cy.url().should('include', '/dashboard');
  });
});
