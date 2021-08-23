describe('Code Page for testing webelements',  ()=> {
    beforeEach(()=>
    {
        cy.visit("http://127.0.0.1:5500/Help%20Folder/cygetcontains.html")
    })
    it('Get Single Element',()=>
    {
        cy.get('input[name="Channel Name"]').type("Hello")
        cy.get('input[name="date"]').type("2023-12-12")
    })
    it('GET-Limit Scope -Example,Scope is changed to fieldset',()=>
    {
        cy.get('fieldset#GETCOMMAND').within(div=>
        {
            cy.get('button').click({multiple:true})

        })
    })
    it('Selecting Multiple Elements Part 1',()=>
    {
       cy.get('button').should('have.length','9')
        cy.get('button').last().click()
        cy.get('button').first().click()

    })
    it('Selecting Multiple Elements Part 2',()=>
    {
        cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({multiple:true})
        cy.get(':checkbox').parent().prev().find('button').first().click();
        cy.reload()

    })
    it('Selecting Multiple Elements Part 2',()=>
    {
        cy.get('span').each(spn=>
        {
          console.log(spn.text())
        })

    })
    it('Span Click',()=>
    {
        cy.contains("SPAN ONE").click()
        cy.contains("SPAN TWO").click()
        cy.contains('span','FIND ME').click()

    })



});