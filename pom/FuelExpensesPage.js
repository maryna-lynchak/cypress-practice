class FuelExpensesPage {

    get header() {
        return cy.contains('h1', 'Fuel expenses');
    };

    get addExpenseButton() {
        return cy.get('div.panel-page_heading .btn-primary');
    };

    get closeExpenseModal() {
        return cy.get('button.close');
    }

    get modalContent() {
        return cy.get('app-add-expense-modal');
    };

    get modalTitle() {
        return cy.get('h4.modal-title');
    }

    get vehicleLabel() {
        return cy.get('label[for="addExpenseCar"]');
    }

    get vehicleDropdown() {
        return cy.get('#addExpenseCar');
    };

    get reportDateLabel() {
        return cy.get('label[for="addExpenseDate"]');
    }

    get reportDateField() {
        return cy.get('#addExpenseDate');
    };

    get mileageLabel() {
        return cy.get('label[for="addExpenseMileage"]');
    }

    get mileageField() {
        return cy.get('#addExpenseMileage');
    };

    get litersLabel() {
        return cy.get('label[for="addExpenseLiters"]');
    }

    get litersField() {
        return cy.get('#addExpenseLiters');
    };

    get totalCostLabel() {
        return cy.get('label[for="addExpenseTotalCost"]');
    }

    get totalCostField() {
        return cy.get('#addExpenseTotalCost');
    };

    get cancelButton() {
        return cy.get('.modal-footer .btn-secondary');
    }

    get submitButton() {
        return cy.get('app-add-expense-modal .btn-primary');
    };

    get expensesTable() {
        return cy.get('.table.expenses_table');
    };

    get mileageErrorMessage() {
        return cy.get('#addExpenseMileage').parent().parent().find('.invalid-feedback p');
    }

    get litersErrorMessage() {
        return cy.get('#addExpenseLiters').parent().parent().find('.invalid-feedback p');
    }

    get totalCostErrorMessage() {
        return cy.get('#addExpenseTotalCost').parent().parent().find('.invalid-feedback p');
    }
    
    visit() {
        cy.visit('/panel/expenses');
    };

    openAddExpenseModal() {
        this.addExpenseButton.click();
    }

    closeAddExpenseModal() {
        this.closeExpenseModal.click();
    }
    
    verifyPageHeaderIsVisible() {
        this.header.should('be.visible');
    };

    verifyModalContentIsVisible() {
        this.modalContent.should('be.visible');
    };

    verifyModalTitle() {
        this.openAddExpenseModal();
        this.modalTitle.should('contain', 'Add an expense');
        this.closeAddExpenseModal();
    }

    verifyModalLabelsIsVisible() {
        this.openAddExpenseModal();
        this.vehicleLabel.should('contain', 'Vehicle');
        this.reportDateLabel.should('contain', 'Report date');
        this.mileageLabel.should('contain', 'Mileage');
        this.litersLabel.should('contain', 'Number of liters');
        this.totalCostLabel.should('contain', 'Total cost');
        this.cancelButton.should('contain', 'Cancel');
        this.submitButton.should('contain', 'Add');
        this.closeAddExpenseModal();
    }

    verifyFieldValidation() {
        this.openAddExpenseModal();
        this.mileageField.focus().blur();
        this.mileageErrorMessage.should('contain', 'Mileage required');
        this.litersField.focus().blur();
        this.litersErrorMessage.should('contain', 'Liters required');
        this.totalCostField.focus().blur();
        this.totalCostErrorMessage.should('contain', 'Total cost required');
        this.closeAddExpenseModal();
    }

    addNewExpense(brand, model, mileage, liters, totalCost, reportDate) {
        this.openAddExpenseModal();
        this.modalContent.should('be.visible');
        const carName = `${brand} ${model}`;
        this.vehicleDropdown.find('option').contains(carName).first().then(option => {
            const value = option.attr('value');
            this.vehicleDropdown.select(value);
        });
        this.reportDateField.clear().type(reportDate);
        this.mileageField.clear().type(mileage);
        this.litersField.clear().type(liters);
        this.totalCostField.clear().type(totalCost);
        this.submitButton.click();
    }

    verifyExpenseInTable(mileage) {
        this.expensesTable.should('contain', mileage);
    }
}

export default new FuelExpensesPage();

