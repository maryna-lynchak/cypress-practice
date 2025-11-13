/// <reference types="cypress" />
import HomePage from "../../POM/HomePage";
import LogInForm from "../../POM/LogInForm";
import GaragePage from "../../POM/GaragePage";

describe('Garage page tests with POM', () => {
   beforeEach (() => {
      cy.visit('/');
      HomePage.openSignInForm();
      LogInForm.singInWithCredentials('mlinchak@gmail.com','Qwerty+2025');
      GaragePage.verifyPageHeaderIsVisible();
    });

   it('Verify modal content', () => {
      GaragePage.verifyModalLabelsIsVisible();
      GaragePage.openAddCarModal();
      GaragePage.verifyBrandOptions();
      GaragePage.verifyModelOptions('Audi');
      GaragePage.verifyModelOptions('BMW');
      GaragePage.verifyModelOptions('Ford');
      GaragePage.verifyModelOptions('Porsche');
      GaragePage.verifyModelOptions('Fiat');
      GaragePage.closeAddCarModal();
   });

   it('Adding new car - Fiat', () => {
      GaragePage.addNewCar('Fiat', 'Punto', '100');
      GaragePage.verifyLastAddedCar('Fiat', 'Punto');
   });

   it('Update mileage to Fiat', () => {
      GaragePage.updateCarMileage('Fiat', 'Punto', '500');
      GaragePage.verifyCarMileage('Fiat', 'Punto', '500');
   });

   it('Adding new car - Ford', () => {
      GaragePage.addNewCar('Ford', 'Fusion', '200');
      GaragePage.verifyLastAddedCar('Ford', 'Fusion');
   });

   it('Update mileage to Ford', () => {
      GaragePage.updateCarMileage('Ford', 'Fusion', '1000');
      GaragePage.verifyCarMileage('Ford', 'Fusion', '1000');
   });

   it('Adding new car - Porsche', () => {
      GaragePage.addNewCar('Porsche', 'Panamera', '300');
      GaragePage.verifyLastAddedCar('Porsche', 'Panamera');
   });

   it('Update mileage to Porsche', () => {
      GaragePage.updateCarMileage('Porsche', 'Panamera', '500');
      GaragePage.verifyCarMileage('Porsche', 'Panamera', '500');
   });

    it('Adding new car - Audi', () => {
       GaragePage.addNewCar('Audi', 'A6', '2398');
       GaragePage.verifyLastAddedCar('Audi', 'A6');
    });

    it('Adding new car - BMW', () => {
       GaragePage.addNewCar('BMW', 'X6', '99');
       GaragePage.verifyLastAddedCar('BMW', 'X6');
    });
     

   //  LogInForm.enterEmail('mlinchak@gmail.com');
   //  LogInForm.enterPassword('Qwerty+2025');
   //  LogInForm.clickLoginButton();
});
