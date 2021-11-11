describe('Visit Home Page', () => {
  it('Loads hello world', () => {
    cy.visit('/')
    cy.contains('Hello World')

    expect(true).to.equal(false)
  })
})
