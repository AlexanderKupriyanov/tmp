describe("Google Test", () => {
  it('Shows Google', () => {
    cy.visit('http://localhost:3000')

    window.localStorage.setItem('iv', "abcdABCD12345678")
    window.localStorage.setItem('uuid', "nAgtjfnkhfxSQZ/TpPWAjQ==")
    cy.get("body", {timeout:20000}).should("be.visible")
    cy.get("#js-game-start-btn", {timeout:20000}).should("be.visible")
  })
})
