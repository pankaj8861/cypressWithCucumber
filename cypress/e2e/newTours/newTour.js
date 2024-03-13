import {Before,After,Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.visit("http://demo.guru99.com/test/newtours/");
})
Given("Open new tour application",()=>{
    cy.visit("http://demo.guru99.com/test/newtours/");
})

When("I login with following users",(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get("input[name='userName']").type(element.userName);
        cy.get("input[name='password']").type(element.password);
    });
}
)
Then("Click submit button",()=>{
    cy.get("input[name='submit']").click();
    cy.title().should("eq","Welcome: Mercury Tours");
})

And("Verify title of page",()=>{
    cy.title().should("eq",'Welcome: Mercury Tours');

})

After(()=>{
    cy.reload()
})