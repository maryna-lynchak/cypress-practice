/// <reference types="cypress" />

beforeEach(() => { 
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });

describe('API testing', () => {
    let sid;
    before(() => { 
        cy.request('POST', '/api/auth/signin',{
                'email': 'mlinchak@gmail.com',
                'password': 'Qwerty+2025',
                'remember': false
            }).then((response) => {
            sid = String(response.headers['set-cookie']).split(';')[0];

            expect(response.status).to.eq(200);
            expect(sid).not.to.be.empty;
        });
    });

    context('Request Add an [/expenses]', () => {
       
        it('Add an expenses BMW X6', () => {
            cy.request({
                method: 'POST',
                url: '/api/expenses',
                body: {
                    'carId': 438127,
                    'reportedAt': "2025-11-14",
                    'mileage': 100,
                    'liters': 50,
                    'totalCost': 1200,
                    'forceMileage': false
                },
                headers: {
                    'Cookie': sid,
                }, 
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('carId', 438127);
                expect(response.body).to.have.property('mileage', 370);
                expect(response.body).to.have.property('liters', 50);
                expect(response.body).to.have.property('totalCost', 1200);
                
            });
        });

         it('Add an expenses Audi A6' , () => {
            cy.request({ method: 'POST',
                url: '/api/expenses',
                body: {
                    'carId': 438126,
                    'reportedAt': "2025-11-14",
                    'mileage': 370,
                    'liters': 50,
                    'totalCost': 1200,
                    'forceMileage': false
                },
                headers: {
                    'Cookie': sid,
                }, 
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('carId', 438126);
                expect(response.body).to.have.property('mileage', 370);
                expect(response.body).to.have.property('liters', 50);
                expect(response.body).to.have.property('totalCost', 1200);
                
            });
        });

        it('Add an expenses Audi A6' , () => {
            cy.request({ method: 'POST',
                url: '/api/expenses',
                body: {
                    'carId': 438125,
                    'reportedAt': "2025-11-14",
                    'mileage': 370,
                    'liters': 50,
                    'totalCost': 1200,
                    'forceMileage': false
                },
                headers: {
                    'Cookie': sid,
                },
               
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('carId', 438125);
                expect(response.body).to.have.property('mileage', 370);
                expect(response.body).to.have.property('liters', 50);
                expect(response.body).to.have.property('totalCost', 1200);
                
            });
        });
    });

     it('Request GET all expenses [/expenses]', () => {
        cy.request({
                method: 'GET',
                url: '/api/expenses',
                headers: {
                    'Cookie': sid,
        }
              }).then((response) => {
               cy.log(JSON.stringify(response.body.data));
                expect(response.status).to.eq(200);
                
            });
        });


        it('Editing an expenses ' , () => {
            cy.request({
                method: 'PUT',
                url: '/api/expenses/438127',
                body: {
                    'carId': 438127,
                    'id': 395920,
                    'reportedAt': "2025-11-14",
                    'mileage': 400,
                    'liters': 50,
                    'totalCost': 1200,
                    'forceMileage': false
                },
                headers: {
                    'Cookie': sid,
                }, 
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('carId', 438127);
                expect(response.body).to.have.property('mileage', 400);
                expect(response.body).to.have.property('liters', 50);
                expect(response.body).to.have.property('totalCost', 1200);
            });
        });
               
       it('Deleting an expenses ' , () => {
        let carId;
        cy.request({
                method: 'GET',
                url: '/api/expenses',
                headers: {
                    'Cookie': sid,
        } 
                }).then((response) => {
                    cy.log(JSON.stringify(response.body.data[0].id));
                    carId = response.body.data[0].id;
            
             cy.request({
                method: 'DELETE',
                url: '/api/expenses/${carId}',
                headers: {
                    'Cookie': sid,
            },
             }).then((response) => {
                cy.log(carId);
                expect(response.status).to.eq(200);      
            });
        });
    });


});
