describe('Mouse click events', () => {
    it('Triggering single click', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/mouseevents.html')
        cy.get('#click').trigger('click');
        cy.on('window:alert',(txt)=>
        {
            expect(txt).to.eql('click event is fired')
        })
    })
    it('Double Click', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/mouseevents.html')
        cy.get('#dblclick').dblclick();
        cy.on('window:alert',(txt)=>
        {
            expect(txt).to.eql('dblclick event is fired')
        })
        
    })
    it('Right click', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/mouseevents.html')
        cy.get('#rightclick').trigger('rightclick')
        cy.on('window:alert',(txt)=>
        {
            expect(txt).to.eql('contextmenu event is fired')
        })
        
    })
    it('Contextual click options', () => {
        cy.get('#box2').rightclick();
        cy.contains('Two Oranges').should('be.visible')
        cy.contains('Two Oranges').click();

    })
    it.only('Testing Mouseover of flipkart', () => {
        cy.visit('https://www.flipkart.com/')
        cy.contains('More').trigger('mouseover')
        cy.contains('Notification Preferences').trigger('click')
        

    })
});