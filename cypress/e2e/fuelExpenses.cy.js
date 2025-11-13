/// <reference types="cypress" />
import HomePage from "../../POM/HomePage";
import LogInForm from "../../POM/LogInForm";
import GaragePage from "../../POM/GaragePage";
import FuelExpensesPage from "../../POM/FuelExpensesPage";

describe('Fuel expenses page tests with POM', () => {
   beforeEach (() => {
      cy.visit('/');
      HomePage.openSignInForm();
      LogInForm.singInWithCredentials('mlinchak@gmail.com','Qwerty+2025');
      cy.wait(500);
      FuelExpensesPage.visit();
      FuelExpensesPage.verifyPageHeaderIsVisible();
   });

   it('Verify modal content', () => {
      FuelExpensesPage.verifyModalTitle();
      FuelExpensesPage.verifyModalLabelsIsVisible();
   });

   it('Verify field validation', () => {
      FuelExpensesPage.verifyFieldValidation();
   });

   it('Adding new expense - Fiat Punto', () => {
   //  GaragePage.addNewCar('Fiat', 'Punto', '100');
      FuelExpensesPage.addNewExpense('Fiat', 'Punto', '150', '20', '500', '12.11.2025');
      FuelExpensesPage.verifyExpenseInTable('150');
   });

   it('Adding new expense - Ford Fusion', () => {
   //   GaragePage.addNewCar('Ford', 'Fusion', '200');
      FuelExpensesPage.addNewExpense('Ford', 'Fusion', '250', '30', '750', '12.11.2025');
      FuelExpensesPage.verifyExpenseInTable('250');
   });

   it('Adding new expense - BMW X5', () => {
   //   GaragePage.addNewCar('BMW', 'X6', '300');
      FuelExpensesPage.addNewExpense('BMW', 'X6', '350', '40', '1000', '12.11.2025');
      FuelExpensesPage.verifyExpenseInTable('350');
   });
});

