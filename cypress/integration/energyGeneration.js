context('Energy generation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('display the header the footer and the data correctly', () => {
    // display the header and the footer
    cy.contains(/Energy Generation In The UK/i)
    cy.contains(/Copyright/i)

    cy.wait(1000)
    // display all the energy sources
    cy.contains(/biomass/i)
    cy.contains(/coal/i)
    cy.contains(/imports/i)
    cy.contains(/gas/i)
    cy.contains(/nuclear/i)
    cy.contains(/other/i)
    cy.contains(/hydro/i)
    cy.contains(/solar/i)
    cy.contains(/wind/i)
  })
})
