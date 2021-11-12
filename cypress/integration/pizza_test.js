
describe('Pizza_form_test',()=>{
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    //Sanity check
    it('Sanity check',()=>{
        expect(1+1).to.equal(2);
        expect(2+1).not.to.equal(2);
    })
    const nameInput = () => cy.get('input[name=name]');
    const submitBtn = () => cy.get('button[id="order-button"]');
    const orderInput = () => cy.get('button[id="order-pizza"]');
    const topping1Input = () => cy.get('input[name=topping1]');
    const topping2Input = () => cy.get('input[name=topping2]');
    const topping3Input = () => cy.get('input[name=topping3]');
    const topping4Input = () => cy.get('input[name=topping4]');
    const topping5Input = () => cy.get('input[name=topping5]');
    const specialInput = () => cy.get('input[name=special]')
    //test that you can add text to the box
    it('User can add text to the box',() => {
        orderInput().should('exist');
        orderInput().click();
        nameInput().should('exist');
        nameInput().type('Taylor');

        nameInput().should('have.value','Taylor');
    })
    // test that you can select multiple toppings
    it('User can select multiple toppings',() => {
        orderInput().should('exist')
        orderInput().click();

        topping1Input().should('exist');
        topping2Input().should('exist');
        topping3Input().should('exist');
        topping4Input().should('exist');
        topping5Input().should('exist');

        topping1Input().should('not.be.checked');
        topping2Input().should('not.be.checked');
        topping3Input().should('not.be.checked');
        topping4Input().should('not.be.checked');
        topping5Input().should('not.be.checked');

        topping1Input().check();
        topping1Input().should('be.checked');

        topping2Input().check();
        topping2Input().should('be.checked');

        topping3Input().check();
        topping3Input().should('be.checked');

        topping4Input().check();
        topping4Input().should('be.checked');

        topping5Input().check();
        topping5Input().should('be.checked');

    })

    //test that you can submit the form
    it('User can submit the form',() => {
        orderInput().should('exist')
        orderInput().click();

        nameInput().should('exist');
        topping1Input().should('exist');
        topping2Input().should('exist');
        topping3Input().should('exist');
        topping4Input().should('exist');
        topping5Input().should('exist');
        specialInput().should('exist');
        submitBtn().should('exist');
        submitBtn().should('be.disabled');

        nameInput().type('Mike')
        submitBtn().should('not.be.disabled');
        topping1Input().check();
        topping3Input().check();
        topping5Input().check();
        specialInput().type('With diet coke!');

        submitBtn().click();

        cy.contains('Mike').should('exist');


    })
})