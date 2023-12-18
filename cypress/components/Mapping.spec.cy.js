/* eslint-disable no-undef */
// App.spec.js
/// <reference types="Cypress" />
import React from "react";
import Mapping from "../../src/pages/Maping";

describe("Unit Test Case for Mapping Component using Cypress", () => {
  // Checking whether Mapping component is loaded and doing assertions.
  it("renders", () => {
    cy.mount(<Mapping />);
    cy.contains("Todo List").should("be.visible");
  });

  // Toggling completion status of the first item and checking its visual appearance.
  it("toggles completion of the first item", () => {
    cy.mount(<Mapping />);
    // cy.get("li"): This command selects all <li> elements on the page.
   // :first: This is a jQuery selector used within the cy.get() command to select the first matching element among the ones selected.
    cy.get("li:first").click();
    cy.get("li:first").should("have.class", "completed");
  });

  it("toggles completion of the second item", () => {
    cy.mount(<Mapping />);
    // If you want to click the second <li> element, you can modify the selector accordingly.
    // You can use the :eq() selector to target a specific index
    cy.get("li:eq(1)").click();
    cy.get("li:eq(1)").should("have.class", "completed");
  });

  // You can add more test cases for App component as needed.
});
