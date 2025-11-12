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

        GaragePage.openAddCarModal();
        GaragePage.verifyModalContentIsVisible();

    });

    it('Empty mileage error', () => {
        GaragePage.mileageField.clear().blur();
    
    
      GaragePage.verifyIncorrectModalMileageErrorMessage('mileage', '-1');
      GaragePage.verifyEmptyModalMileageErrorMessage('mileage', 'empty');
    });

    it('Adding new car - Fiat', () => {
       GaragePage.addNewCar('Fiat', 'Punto', '146');
       GaragePage.verifyLastAddedCar('Fiat Punto');
    });

    // it('Update mileage to Fiat', () => {
    //     // todo
    // });

    it('Adding new car - Ford', () => {
       GaragePage.addNewCar('Ford', 'Fusion', '298');
       GaragePage.verifyLastAddedCar('Ford Fusion');
    });

    // it('Update mileage to Ford', () => {
    //     // todo
    // });

    it('Adding new car - Porsche', () => {
       GaragePage.addNewCar('Porsche', 'Panamera', '874');
       GaragePage.verifyLastAddedCar('Porsche Panamera');
    });

    it('Adding new car - Audi', () => {
       GaragePage.addNewCar('Audi', 'A6', '2398');
       GaragePage.verifyLastAddedCar('Audi A6');
    });

    it('Adding new car - BMW', () => {
       GaragePage.addNewCar('BMW', 'X6', '99');
       GaragePage.verifyLastAddedCar('BMW X6');
    });
     

    //  LogInForm.enterEmail('mlinchak@gmail.com');
    //  LogInForm.enterPassword('Qwerty+2025');
    //  LogInForm.clickLoginButton();
    

});