describe("posts", () => {
  /*
    display a list
    filter the list
  */
  beforeEach(() => {
    cy.login("/posts");
  })

  it("display and filter the list of posts", () => {
    cy.findByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i).should("exist");
  
    // mock
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts", { fixture: "posts.json" });
    cy.findByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i).should("exist");
  })
})