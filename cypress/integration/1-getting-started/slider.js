describe('Sliders Demo', () => {
    it.skip('Default Range Slider', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/slider.html')
        cy.get('#rangeone').invoke('val','90').trigger('change')
        cy.get('p#one').should('have.text',90)
        cy.get('#rangetwo').invoke('val','70').trigger('change')
        cy.get('p#two').should('have.text',70)

    })
    it.skip('Styled Slider Css', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/styledslider.html')
        cy.get('div#slide-2').click({force:true})
        cy.get('div#slide-3').click({force:true})
        cy.get('a[href="#slide-1"]').click()
        cy.url().should('include','#slide-1')
    })
    it.only('Slider on Test Automation blogspot', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('div#slider span').invoke('attr','style','left:90%')
    })

});