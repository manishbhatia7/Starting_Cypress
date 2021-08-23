describe('Code Page for testing webelements',  ()=> {
    
    it('Get Single Element',()=>
    {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html')
        cy.get('#speed').select('Fast').should($el=>{
            
    
                const el=$el[0]
                expect(el.options[el.selectedIndex].value).to.eql('4');
                expect(el.options[el.selectedIndex].text).to.eql('Fast');
               })
               cy.get('#selectSpeed').should('have.text','Fast')
        })
    it('Get Single Element Part 2',()=>
    {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html')
        cy.get('#files').select('Some other file with a very long option text').should($el=>{
            
    
                const el=$el[0]
                expect(el.options[el.selectedIndex].value).to.eql('someotherfile');
                expect(el.options[el.selectedIndex].text).to.eql('Some other file with a very long option text');
        })
               cy.get('#selectFiles').contains('Some other file with a very long option text')
        })
        it('Autocomplete Element',()=>
    {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html')
        cy.get('#myInput').type("Ind{downarrow}{enter}").blur().should('have.value','India')
        cy.get('#selectCountries').should('have.text','India')
    })
    it.only('Multiselect Element',()=>
    {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentDropDownTypes.html')
        cy.get("#cselect").select(["USA","India","Angola"]).invoke("val").should("deep.equal", ["USA","India","Angola"])


    })
    });
