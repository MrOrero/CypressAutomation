///<reference types= "cypress" />



//This function is to describe the test suite
describe("Instagram Login", function () {

    //This function is to describe the test case
    it('instagram login', function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");
    //spy on the username input field
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
    //type username 
    .type("ifeomarh")
    //spy on the password input field
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
    //type password 
    .type("@Ifeoma#1")
    //spy on the login button
    cy.get(".sqdOP > .qF0y9").click();
    //search
    cy.get(".TqC_a").type("mr_orero")
    //click account
    cy.get(":nth-child(1) > .-qQT3 > .XfCBB").click().wait(10000);
    //click dm
    cy.get(".vwCYk > .sqdOP > ._7UhW9").click();
    //send text
    cy.get(".qF0y9 > textarea").type("Hi")
    //send
   // cy.get(".HoLwm").click();
   // cy.get(".X3a-9 > ._4EzTm > .sqdOP").click();



  });
});