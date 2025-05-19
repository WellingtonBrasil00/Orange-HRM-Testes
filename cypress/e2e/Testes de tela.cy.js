describe('Testes de Mensagens de Erro no Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  const mensagens = {
    credenciaisInvalidas: 'Invalid credentials',
    campoObrigatorio: 'Required'
  }

  it('Deve exibir erro para usuário e senha incorretos', () => {
    cy.get('input[name="username"]').type('usuarioErrado')
    cy.get('input[name="password"]').type('senhaErrada')
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.credenciaisInvalidas).should('be.visible')
  })

  it('Deve exibir erro para senha incorreta com usuário correto', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('senhaErrada')
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.credenciaisInvalidas).should('be.visible')
  })

  it('Deve exibir erro para usuário incorreto com senha correta', () => {
    cy.get('input[name="username"]').type('usuarioErrado')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.credenciaisInvalidas).should('be.visible')
  })

  it('Deve exibir erro quando ambos os campos estiverem vazios', () => {
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.campoObrigatorio).should('be.visible')
  })

  it('Deve exibir erro quando apenas a senha estiver vazia', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.campoObrigatorio).should('be.visible')
  })

  it('Deve exibir erro quando apenas o usuário estiver vazio', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains(mensagens.campoObrigatorio).should('be.visible')
  })
})