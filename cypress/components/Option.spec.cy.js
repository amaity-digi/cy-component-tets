/* eslint-disable no-undef */
// Option.spec.js
/// <reference types="Cypress" />
import React from "react";
import Option from "../../src/pages/Option";

describe("Unit Test Case for Option Component using Cypress", () => {
    beforeEach(("Render", () => {
        cy.mount(<Option />);
    }))
  // Checking whether Option component is loaded and doing assertions.
  it("renders", () => {
    cy.contains("Selected Option: React").should("be.visible");
  });

  // Changing the selected option to Java and checking the updated text.
  it("changes selected option to Java", () => {
    cy.get("#selectOptions").select("java");
    cy.contains("Selected Option: java").should("be.visible");
  });

  // Changing the selected option to NodeJs and checking the updated text.
  it("changes selected option to NodeJs", () => {
    cy.get("[data-cy=selectOptions]").select("nodejs");
    cy.contains("Selected Option: nodejs").should("be.visible");
  });

  // Changing the selected option to Nextjs and checking the updated text.
  it("changes selected option to Nextjs", () => {
    cy.get("[data-cy=selectOptions]").select("nextjs");
    cy.contains("Selected Option: nextjs").should("be.visible");
  });
});
