describe('Different scenarios of file upload', () => {
    it('Single File Upload-DOM', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('#file-upload1').attachFile('dog_small.jpg')
        cy.get('span#fileName1').should('have.text','dog_small.jpg')
    });
    it('', () => {
        
    })
    it('', () => {
        
    })
    
});