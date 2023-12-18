/* eslint-disable no-undef */
/// <reference types="Cypress" />

import React from "react";
import App from "../../src/App";

describe("Unit Test case using cypress", () => {
    // beforeEach(("App render"), () => {
    //     cy.log("Coming");
    //     cy.mount(<App />);
    // })

    //  afterEach(("After All test case"), () => {
    //      cy.log("After each it block")
    //  })

  //Checking whether the App component is loaded. and doing asertion
  it("renders", () => {
    //cy.mount() is a Cypress command used to mount a React component for testing.
    cy.mount(<App />);
    // cy.contains(/Learn React/i).should("be.visible");
  });

  //Checking whether the counter has the initial value of 0
  it("Counter has 0", () => {
     cy.mount(<App />);
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  //Clicking the incremanent counter and checking whether the counter is raised.
  it("Counter increased by 1", () => {
    cy.mount(<App />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  //Clicking the decrement counter and checking whether the counter is raised.
  it("Counter decreased by 1", () => {
    cy.mount(<App />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });

  //Setting the initial value to 100 (Passing props/dummy data to the component)
  // it.skip && it.only
  it('Counter value set to 100',()=>{
  cy.mount(<App initial={100} />) //The props should be passed when the component is initially mounted.
  cy.get('[data-cy=counter]').should('have.text','100')
  })
});
