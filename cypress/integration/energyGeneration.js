context('user story', () => {
  beforeEach(() => {
    // Given I am on the ‘New Releases’ page..
    cy.visit('http://localhost:3000')
  })

  it('display the header the footer and the movies', () => {
    cy.contains(/NEW RELEASES/i)
    cy.contains(/home/i)
    cy.contains(/show more info/i)
    cy.contains(/exit/i)

    cy.wait(2000)
    // Then I can see the list of newly released films.
    cy.get('[data-testid="movie-1"]').should('exist')
    cy.get('[data-testid="movie-2"]').should('exist')
    cy.get('[data-testid="movie-3"]').should('exist')
    cy.get('[data-testid="movie-4"]').should('exist')
    cy.get('[data-testid="movie-info"]').should('not.exist')

    // Given I have navigated to a particular film, When I click on it..
    cy.get('[data-testid="movie-1"]').click()
    cy.wait(2000)

    // Then I can see length, rating, year, country, genre
    cy.get('[data-testid="movie-info"]').should('exist')
  })
})
