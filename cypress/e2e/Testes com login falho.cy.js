describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // 1. Usuário e senha incorretos
    cy.get('input[name="username"]').type('usuarioErrado');
    cy.get('input[name="password"]').type('senhaErrada');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');

    // 2. Usuário correto e senha incorreta
    cy.get('input[name="username"]').clear().type('Admin');
    cy.get('input[name="password"]').clear().type('senhaErrada');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');

    // 3. Usuário incorreto e senha correta
    cy.get('input[name="username"]').clear().type('usuarioErrado');
    cy.get('input[name="password"]').clear().type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');

    // 4. Campos vazios
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('be.visible');

    // 5. Senha vazia e usuário preenchido
    cy.get('input[name="username"]').clear().type('Admin');
    cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('be.visible');

    // 6. Usuário vazio e senha preenchida
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').clear().type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('be.visible');

  })
})