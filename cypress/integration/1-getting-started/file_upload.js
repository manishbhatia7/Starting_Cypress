describe('Different scenarios of file upload', () => {
    it.skip('Single File Upload-DOM', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('#file-upload1').attachFile('dog_small.jpg')
        cy.get('span#fileName1').should('have.text','dog_small.jpg')
    });
    it.skip('Single File Upload-DOM-Different Name', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('#file-upload1').attachFile({filePath:'dog_small.jpg',fileName:'puppy.jpg'})
        cy.get('span#fileName1').should('have.text','puppy.jpg')
    })
    it.only('Attaching Multiple files', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('#file-upload2')
        .attachFile('example.json')
        .attachFile('dog_small.jpg')
    })
    
});