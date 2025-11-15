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
        return cy.get('div.modal-content .btn-primary');
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
        this.mileageMessageError('mileage','Mileage has to be from 0 to 999999');
        this.closeAddCarModal();
    }

    verifyEmptyModalMileageErrorMessage(mileageField = 'mileage', value= 'empty') {
        this.openAddCarModal();
        this.emptyMileageMessage('mileage', 'Mileage cost required');
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
        const carName = `${brand} ${model}`;
        cy.contains('p.car_name', carName)
            .parents('.car-item')
            .find('.update-mileage-form_input')
            .clear()
            .type(newMileage);
    }

    verifyCarMileage(brand, model, expectedMileage) {
        const carName = `${brand} ${model}`;
        cy.contains('p.car_name', carName)
            .parents('.car-item')
            .find('.update-mileage-form_input')
            .should('have.value', expectedMileage);
    }

    addCarFuelExpense(brand, model, ) {
        // todo
    }

    verifyBrandOptions() {
        this.brandDropdown.contains('option', 'Audi').should('exist');
        this.brandDropdown.contains('option', 'BMW').should('exist');
        this.brandDropdown.contains('option', 'Ford').should('exist');
        this.brandDropdown.contains('option', 'Porsche').should('exist');
        this.brandDropdown.contains('option', 'Fiat').should('exist');
    }

    verifyModelOptions(brand) {
        this.brandDropdown.select(brand);
        
        if (brand === 'Audi') {
            this.modelDropdown.contains('option', 'TT').should('exist');
            this.modelDropdown.contains('option', 'R8').should('exist');
            this.modelDropdown.contains('option', 'Q7').should('exist');
            this.modelDropdown.contains('option', 'A6').should('exist');
            this.modelDropdown.contains('option', 'A8').should('exist');
        } else if (brand === 'BMW') {
            this.modelDropdown.contains('option', '3').should('exist');
            this.modelDropdown.contains('option', '5').should('exist');
            this.modelDropdown.contains('option', 'X5').should('exist');
            this.modelDropdown.contains('option', 'X6').should('exist');
            this.modelDropdown.contains('option', 'Z3').should('exist');
        } else if (brand === 'Ford') {
            this.modelDropdown.contains('option', 'Fiesta').should('exist');
            this.modelDropdown.contains('option', 'Focus').should('exist');
            this.modelDropdown.contains('option', 'Fusion').should('exist');
            this.modelDropdown.contains('option', 'Mondeo').should('exist');
            this.modelDropdown.contains('option', 'Sierra').should('exist');
        } else if (brand === 'Porsche') {
            this.modelDropdown.contains('option', '911').should('exist');
            this.modelDropdown.contains('option', 'Cayenne').should('exist');
            this.modelDropdown.contains('option', 'Panamera').should('exist');
        } else if (brand === 'Fiat') {
            this.modelDropdown.contains('option', 'Palio').should('exist');
            this.modelDropdown.contains('option', 'Ducato').should('exist');
            this.modelDropdown.contains('option', 'Panda').should('exist');
            this.modelDropdown.contains('option', 'Punto').should('exist');
            this.modelDropdown.contains('option', 'Scudo').should('exist');
        }
    }

    verifyLastAddedCar(brand, model) {
        const carName = `${brand} ${model}`;
        this.addedCarNames.first().should('have.text', carName);
    };
}

export default new GaragePage();
