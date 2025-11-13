/// <reference types="cypress" />

describe('Test Sing Up form', () => {
    beforeEach (() => {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.contains('Sign up').click();
    });

    it('modal-content', () => {
        cy.contains('Registration').should('be.visible');
        cy.contains('Name').should('be.visible');
        cy.contains('Last name').should('be.visible');
        cy.contains('Email').should('be.visible');
        cy.contains('Password').should('be.visible');
        cy.contains('Re-enter password').should('be.visible');
        cy.get('button.close').should('be.visible');
        cy.contains('Register').should('be.visible');
    });

    it('Check name field with valid data', () => {
        cy.get('#signupName').type('Marine', { delay: 200 }).blur();
         cy.get('#signupName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
     
        cy.get('#signupName').clear();
        });

    it('Check name field with min valid data', () => {
        cy.get('#signupName').type('Vd', { delay: 200 }).blur();
         cy.get('#signupName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupName').clear();
        });

    it('Check name field with max valid data, upper register', () => {
        cy.get('#signupName').type('QWERTYUIOPASDFGHJKL', {delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupName').clear();
         });

    it('Check name field with max valid data, lower register', () => {
        cy.get('#signupName').type('oqwertyuiopqwertyuio', {delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupName').clear();
        });

    it('Check name field with invalid value, 1 letter', () => {
        cy.get('#signupName').type('V',{delay: 200}).blur();
        cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
        cy.get('.invalid-feedback').should ('include.text', 'Name has to be from 2 to 20 characters long')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupName').clear();
    });
     
    it('Check name field with invalid value, 21 letters', () => {
        cy.get('#signupName').type('Qwertyuioplkjhgfdsazr',{delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Name has to be from 2 to 20 characters long')
          .and('have.css', 'color','rgb(220, 53, 69)');

          cy.get('#signupName').clear();
        });

    it('Check name field with invalid value, numbers', () => {
        cy.get('#signupName').type('V22Werv99977654321',{delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');

          cy.get('#signupName').clear();
          });

    it('Check name field with invalid value, special characters', () => {
        cy.get('#signupName').type(' QWE!@#$$%%^^^. ',{delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
          cy.get('#signupName').clear();
          });

    it('Check name field with invalid value, wrong language', () => {
        cy.get('#signupName').type('парапапа',{delay: 200}).blur();
          cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');
         
          cy.get('#signupName').clear();
          });

    it('Check name field with deleted data', () => {
        cy.get('#signupName').focus().blur();
          cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Name required')
          .and('have.css', 'color','rgb(220, 53, 69)')
          });

    it('Check last name field with valid data', () => {
        cy.get('#signupLastName').type('Lynchak', { delay: 200 }).blur();
         cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
     
        cy.get('#signupLastName').clear();
        });

    it('Check last name field with min valid data', () => {
        cy.get('#signupLastName').type('QW', { delay: 200 }).blur();
         cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
        
        cy.get('#signupLastName').clear();
        });

    it('Check last name field with max valid data, upper register ', () => {
        cy.get('#signupLastName').type('QWERTYUIOPASDFGHJKL', {delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupLastName').clear();
        });

    it('Check last name field with max valid data, lower register ', () => {
        cy.get('#signupLastName').type('oqwertyuiopqwertyuio', {delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupLastName').clear();
        });

   it('Check last name field with invalid value, 1 letter', () => {
        cy.get('#signupLastName').type('V',{delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name has to be from 2 to 20 characters long')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupLastName').clear();
        });
     
    it('Check last name field with invalid value, 21 letter', () => {
        cy.get('#signupLastName').type('Qwertyuioplkjhgfdsazr',{delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name has to be from 2 to 20 characters long')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupLastName').clear();
        });

    it('Check last name field with invalid value, numbers', () => {
        cy.get('#signupLastName').type('V22Werv99977654321',{delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupLastName').clear();
        });

    it('Check last name field with invalid value, special symbols', () => {
        cy.get('#signupLastName').type(' QWE!@#$$%%^^^',{delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupLastName').clear();
        });

    it('Check last name field with invalid value, wrong language', () => {
        cy.get('#signupLastName').type('парапапа',{delay: 200}).blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name is invalid')
          .and('have.css', 'color','rgb(220, 53, 69)');
         
        cy.get('#signupLastName').clear();
        });

    it('Check last name field with deleted data', () => {
        cy.get('#signupLastName').focus().blur();
          cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Last name required')
          .and('have.css', 'color','rgb(220, 53, 69)')
        });

    it('Check Email field with valid value', () => {
        cy.get('#signupEmail').type('test2025@popopo.com', { delay: 200 }).blur();
         cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(206, 212, 218)');
     
        cy.get('#signupEmail').clear();
        });

    it('Check Email field with valid value, number and special symbols', () => {
        cy.get('#signupEmail').type('3vGEW$6$7$9821$v@fgg.com', { delay: 200 }).blur();
         cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupEmail').clear();
        });

    it('Check Email field with invalid value, without prefix', () => {
        cy.get('#signupEmail').type('@dh.com',{delay: 200}).blur();
          cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Email is incorrect')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupEmail').clear();
        });

    it('Check Email field with invalid value, without domain', () => {
        cy.get('#signupEmail').type('Qwerty@kjkjkjjhjhvjhgcjhgfcgjfcgjfcgfcgfxzfghjcvbnmnbvsdfxcv.c',{delay: 200}).blur();
          cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Email is incorrect')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupEmail').clear();
        });

    it('Check Email field with invalid value, without @', () => {
        cy.get('#signupEmail').type('Ewrttffff.com',{delay: 200}).blur();
          cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Email is incorrect')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupEmail').clear();
        });

    it('Check Email field with invalid value, wrong language', () => {
        cy.get('#signupEmail').type('Ірина@маіл.com',{delay: 200}).blur();
          cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Email is incorrect')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupEmail').clear();
        });

    it('Check Email field with deleted value', () => {
        cy.get('#signupEmail').focus().blur();
          cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Email required')
          .and('have.css', 'color','rgb(220, 53, 69)')
        });
 
    it('Check Password field with valid value', () => {
        cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
     
        cy.get('#signupPassword').clear();
        });

    it('Check Password field with valid value, numbers and special symbols', () => {
        cy.get('#signupPassword').type('Qwerty+436726#%', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
        cy.get('#signupPassword').clear();
        });

   it('Check Password field with invalid value, 7 charact', () => {
        cy.get('#signupPassword').type('Qwertyu',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, 19 charact', () => {
        cy.get('#signupPassword').type('Qwertyuiop123!@#$%^',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, without numbers and special symbols', () => {
        cy.get('#signupPassword').type('Ennnnnnnnn',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');

        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, without numbers and special symbols', () => {
        cy.get('#signupPassword').type('eNNNNNNNNNN',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, without upper register and special symbols', () => {
        cy.get('#signupPassword').type('e66666666',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, without lower register and special symbols', () => {
        cy.get('#signupPassword').type('66666666E',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupPassword').clear();
        });

    it('Check Password field with invalid value, without letters', () => {
        cy.get('#signupPassword').type('@#$$%^^^&*@@',{delay: 200}).blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
          .and('have.css', 'color','rgb(220, 53, 69)');
          
        cy.get('#signupPassword').clear();
        });

    it('Check Password field with deleted data', () => {
        cy.get('#signupPassword').focus().blur();
          cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
          cy.get('.invalid-feedback').should ('include.text', 'Password required')
          .and('have.css', 'color','rgb(220, 53, 69)')
    });
         
    it('Check Repeat Password field, with valid data', () => {
         cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');
     
         cy.get('#signupRepeatPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');
        
         cy.get('#signupRepeatPassword').clear();
        });

    it('Check Repeat Password field with invalid data, with space after password', () => {
         cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');
     
         cy.get('#signupRepeatPassword').type('iud*342G ', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
         cy.get('.invalid-feedback').should ('include.text', 'Passwords do not match')
         .and('have.css', 'color','rgb(220, 53, 69)');
          
         cy.get('#signupRepeatPassword').clear();
        });

    it('Check Repeat Password field with invalid data, with space before password', () => {
         cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');
         
         cy.get('#signupRepeatPassword').type(' iud*342G', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
         cy.get('.invalid-feedback').should ('include.text', 'Passwords do not match')
         .and('have.css', 'color','rgb(220, 53, 69)');

         cy.get('#signupRepeatPassword').clear();
        });

    it('Check Repeat Password field with invalid data, wrong password', () => {
         cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupRepeatPassword').type('IUD*342g', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
         cy.get('.invalid-feedback').should ('include.text', 'Passwords do not match')
         .and('have.css', 'color','rgb(220, 53, 69)');
          
         cy.get('#signupRepeatPassword').clear();
         });
        
    it('Check Repeat Password field with invalid data, wrong password upper letters', () => {
         cy.get('#signupPassword').type('iud*342G', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupRepeatPassword').type('IUD*342G', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
         cy.get('.invalid-feedback').should ('include.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
         .and('have.css', 'color','rgb(220, 53, 69)');
          
         cy.get('#signupRepeatPassword').clear();
         });

    it('Check Repeat Password field with deleted data', () => {
         cy.get('#signupRepeatPassword').focus().blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color','rgb(220, 53, 69)') 
         cy.get('.invalid-feedback').should ('include.text', 'Re-enter password required')
         .and('have.css', 'color','rgb(220, 53, 69)');
        }); 

    it('Check Registration field with valid data', () => {
         cy.get('#signupName').type('Marine', { delay: 200 }).blur();
         cy.get('#signupName').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupLastName').type('Dekker', { delay: 200 }).blur();
         cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupEmail').type('dekker1_marine@ukr.com', { delay: 200 }).blur();
         cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupPassword').type('Qwerty123', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupRepeatPassword').type('Qwerty123', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.contains('Register').click();    
        }); 
    
     it('Check close button', () => {
         cy.get('#signupName').type('Marine', { delay: 200 }).blur();
         cy.get('#signupName').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupLastName').type('Dekker', { delay: 200 }).blur();
         cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupEmail').type('dekker_marine@ukr.com', { delay: 200 }).blur();
         cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupPassword').type('Qwerty123', { delay: 200 }).blur();
         cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('#signupRepeatPassword').type('Qwerty123', { delay: 200 }).blur();
         cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');

         cy.get('button.close').click();    
        }); 
 });