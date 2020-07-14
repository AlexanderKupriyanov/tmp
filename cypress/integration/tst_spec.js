describe("Google Test", () => {
  it('Shows Google', () => {
    cy.visit('http://localhost:3000')

    cy.get("#js-game-start-btn", {timeout:20000}).should("be.visible")
  })
})
