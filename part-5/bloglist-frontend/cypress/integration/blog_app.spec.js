describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3000')
    const user = {
      name: 'Sehroz',
      username: 'sehroz',
      password: '12345',
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
  })

  it('Login form is shown', function () {
    cy.get('#username')
    cy.get('#password')
    cy.get('#login-button')
    cy.contains('login').click()
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('sehroz')
      cy.get('#password').type('12345')
      cy.get('#login-button').click()

      cy.contains('Logged In')
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type('abcd')
      cy.get('#password').type('abcd')
      cy.get('#login-button').click()

      cy.contains('invalid username or password')
    })
  })
})