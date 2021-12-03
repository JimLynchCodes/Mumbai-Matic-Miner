/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const walletAddresses = [
  '0x951AfFeB6B843CD53CF729E287c0A0ECa7f8F45a',
  '0x5fCB28adBBec951473e9f30D9dE0cB49709a94a8',
  '0xAf295005a588d8EE1A5457Addd982f15254eb75c',
  '0xd4EAfaad9a37b2af145Ca1a160cC9e6204E59812',
  '0xF5479fbC6F4F0c681da4C07f1CaC45326be6e7Ed',
  '0xa950396e3A6E26E2c3596d8fc75f83Df19d10595',
  '0x0EfcfbE517a3Db31d1a8A78a5dC9D42AA50f0796',
  '0x92c459e1092ff73A17322460C332875bE9f9130e',
  '0x5C103DE448Cd58DA972ee22Ab2C2eC2C42B51571',
  '0x58718E54DDEE7f27895b53859549C146e0DF5CBB',
  '0xBb400722BADF463E380884BAE509D7b3D5c5897e',
  '0xe8f9A288554FAAbBAca8c6946bF2E3A07B685c12'
]

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

      cy.wait(1_000);

    return getMoneyRecursive();

  })

  async function getMoneyRecursive() {
    
    walletAddresses.forEach( walletAddress => {

      cy.get('input[placeholder=0xxxxxxxxxxxxxxxxxxxxxxxxxxx]').type(walletAddress);
      
      cy.intercept('*transferTokens*').as('getAccount');
      
      cy.get('button').contains('Submit').click();
  
      cy.get('button').contains('Confirm').click();

      cy.wait('@getAccount');

      cy.reload();
      
    })
      
      counter++;
      
      cy.log('hello: ', counter)
      if (counter < 5) {

        await getMoneyRecursive();
      }
  }

})
