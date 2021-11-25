describe('Visit Home Page', () => {
  it('Loads', () => {
    cy.visit('/')

    expect(true).to.equal(true)
  })

  it('Displays content', () => {
    cy.visit('/')

    expect(true).to.equal(true)
  })

  it('Loads modal', () => {
    cy.visit('/')

    expect(true).to.equal(true)
  })

  it('Has working links', () => {
    cy.visit('/')

    expect(true).to.equal(false)
  })
})
