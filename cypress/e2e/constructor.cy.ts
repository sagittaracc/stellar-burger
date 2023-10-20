import { STELLAR_BURGER_API } from '../../src/constants/api';
import { saveTokens } from '../../src/utils/token';

describe('test constructor', () => {
  beforeEach(() => {
    cy.intercept("GET", `${STELLAR_BURGER_API}/auth/user`, { fixture: "user.json" });
    cy.intercept("POST", `${STELLAR_BURGER_API}/orders`, { fixture: "order.json" });
    cy.intercept("GET", `${STELLAR_BURGER_API}/ingredients`, { fixture: "ingredients.json" });

    saveTokens({
      accessToken: "test-accessToken",
      refreshToken: "test-refreshToken"
    });
  });

  it('should create an order', () => {
    cy.visit("/stellar-burger");

    cy.get('img[data-testid^="Краторная булка"]').as("bun");
    cy.get('img[data-testid^="Говяжий метеорит"]').as("main");
    cy.get("[id^=constructor]").as("constructor");

    cy.get("@bun").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    cy.get("@main").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    cy.get("button").contains("Оформить заказ").as("submit");
    cy.get("@submit").click();

    cy.get("[data-testid=order-number]").contains("777").should("exist");
  })
})