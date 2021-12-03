/// <reference types="cypress" />

const walletAddress = '0x951AfFeB6B843CD53CF729E287c0A0ECa7f8F45a'

let counter = 0;

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://faucet.polygon.technology/')
  })

  it('displays two todo items by default', async () => {

    return getMoneyRecursive();

  })

  async function getMoneyRecursive() {

      cy.get('input[placeholder=0xxxxxxxxxxxxxxxxxxxxxxxxxxx]').type(walletAddress);
  
      cy.get('button').contains('Submit').click();
  
      cy.get('button').contains('Confirm').click();
      
      cy.log('now waiting...')
      cy.wait(60_000);
      
      counter++;
      
      cy.log('hello: ', counter)
      if (counter < 10) {

        cy.reload();
        await getMoneyRecursive();
      }
  }

})
