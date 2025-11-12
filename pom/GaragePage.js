class GaragePage {

    get header() {
        return cy.contains('h1', 'Garage');
    };

    get addNewCarButton() {
        return cy.get('div.panel-page_heading .btn-primary');
    };

    get closeNewCarModal() {
        return cy.get('button.close');
    }

    get modalContent() {
        return cy.get('div.modal-content')
    };

    get brandLabel() {
        return cy.get('label[for="addCarBrand"]');
    }

    get brandDropdown() {
        return cy.get('#addCarBrand');
    };

    get modelLabel() {
        return cy.get('label[for="addCarModel"]');
    }

    get modelDropdown() {
        return cy.get('#addCarModel');
    };

    get mileageLabel() {
        return cy.get('label[for="addCarMileage"]');
    }

    get mileageField() {
        return cy.get('#addCarMileage');
    };

    get cancelAddingFormButton() {
        return cy.get('.modal-footer .btn-secondary');
    }

    get submitAddingFormButton() {
        return cy.get('app-add-car-modal .btn-primary');
    };

    get addedCarNames() {
        return cy.get('p.car_name');
    };

    get mileageMessageError() {
        return cy.get ('.form-group:nth-child(1) .invalid-feedback p');
    }

    get emptyMileageMessage() {
        return cy.get('.form-group:nth-child(2) .invalid-feedback p');
    }
    
    visit() {
        cy.visit('/panel/garage');
    };

    openAddCarModal() {
        this.addNewCarButton.click();
    }

    closeAddCarModal() {
        this.closeNewCarModal.click();
    }
    
    verifyPageHeaderIsVisible() {
        this.header.should('be.visible');
    };

    verifyModalContentIsVisible() {
        this.modalContent.should('be.visible');
    };

    verifyModalLabelsIsVisible() {
        this.openAddCarModal();
        this.brandLabel.should('contain', 'Brand');
        this.modelLabel.should('contain', 'Model');
        this.mileageLabel.should('contain', 'Mileage');
        this.cancelAddingFormButton.should('contain', 'Cancel');
        this.submitAddingFormButton.should('contain', 'Add');
        this.closeAddCarModal();
    }

    verifyIncorrectModalMileageErrorMessage(mileage = 'mileage', value = '-1') {
         this.openAddCarModal();
         this.verifyIncorrectFieldErrorMessage('mileage','Mileage has to be from 0 to 999999');
         this.closeAddCarModal();
    }


    verifyEmptyModalMileageErrorMessage(mileageField = 'mileage', value= 'empty') {
     this.openAddCarModal();
     this.verifyEmptyFieldErrorMessage('mileage', 'Mileage cost required');
    this.closeAddCarModal();
}

         

        
    

    verifyEmptyModalMileageErrorMessage() {
        this.openAddCarModal();
        this.triggerErrorOnField('mileage');
        this.emptyMileageMessage.should('be.visible')
        .and('have.css', 'color','rgb(220, 53, 69)');
        this.mileageField.should('have.css', 'border-color','rgb(220, 53, 69)');
        this.closeAddCarModal();
    }



    triggerErrorOnField(fieldName) {
        let element;

        if (fieldName === 'mileage') {
            element = this.mileageField;
        
        } else {
            throw new Error('Mileage cost required');
        }
        element.focus();
        element.blur();
    }

    addNewCar(brand, model, mileage) {
        this.openAddCarModal();
        this.brandDropdown.select(brand);
        this.modelDropdown.select(model);
        this.mileageField.type(mileage);
        this.submitAddingFormButton.click();
    }

    updateCarMileage(brand, model, newMileage) {
        // todo
    }

    addCarFuelExpense(brand, model, ) {
        // todo
    }

    verifyLastAddedCar(carName) {
        this.addedCarNames.first().should('have.text', carName);
    };

}

export default new GaragePage();