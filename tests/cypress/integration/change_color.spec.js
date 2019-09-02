
  describe('Adding message', () => {
      beforeEach(() => {
          cy.exec('mongo mongodb://localhost:3001/meteor --eval "db.messages.drop()"')
          cy.visit('http://localhost:3000/')
      })
    it('should write in red 255', () => {
        cy.get('.button-color').click()
        cy.contains('div', 'r').find('input').first().clear().type('255')
        cy.get('body').click(500,500)
        cy.get('.fullpage').click(100,100)
        cy.get('input').type('test red').type('{enter}')
        cy.get('p').should('have.text','test red')
        cy.get('p').should('have.css', 'color')
        .and('eq', 'rgb(255, 0, 0)')
    })})