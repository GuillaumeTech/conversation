
  describe('Adding message', () => {
      beforeEach(() => {
          cy.exec('mongo mongodb://localhost:3001/meteor --eval "db.messages.drop()"')
          cy.visit('http://localhost:3000/')
      })
    it('should add a message to the board', () => {
        cy.get('.fullpage').click(100,100)
        cy.get('input').type('test').type('{enter}')
        cy.get('p').should('have.text','test')
    })})