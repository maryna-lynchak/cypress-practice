
import LogInForm from "../../pom/LogInForm";
import GaragePage from "../../pom/GaragePage";

    
describe('UI testing', () => { 
    it('New Name (intercept profile)', () => {
        const fakeName = {
            status: "ok",
            data: [
               {
                  userId: 291234,
                  photoFilename: "default-user.png",
                  name: "Monika",
                  lastName: "Biluchi"
               }
            ]
        };
            cy.intercept('GET','/api/panel/profile', {  
            statusCode: 200,
            body: fakeName
        }).as('getRequest');
        
        cy.visit('https://qauto.forstudy.space/', {
            auth: {  username: 'guest',
                password: 'welcome2qauto',
            }
        });
        
       
        LogInForm.singInWithCredentials('mlinchak@gmail.com','Qwerty+2025');  
   
        cy.wait('@getRequest');
        GaragePage.verifyPageHeaderIsVisible();
        cy.contains('Monika').should('exist');
    });
    
});




