describe('Drag and Drop of Elements', () => {
    const dataTransfer = new DataTransfer();
    function dndNative(source,target,pixel)
    {}

    
    function dndMouse(source,target)
    {}
    it.only('Drag and Drop HTML Native Api', () => {
        //const dataTransfer=new dataTransfer();
        cy.visit('http://127.0.0.1:5500/Help%20Folder/dragndrop.html')
        cy.get('.fill').trigger("dragstart",{dataTransfer})
        cy.get('div.empty:nth-of-type(2)').trigger('drop',{dataTransfer})
        cy.get('.fill').trigger('dragend')
    })
    it('Drag and Drop using Website', () => {
        //const dataTransfer=new dataTransfer();
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
        cy.get("#todrag>span:nth-child(2)").trigger("dragstart",{ dataTransfer });
        cy.get('#mydropzone').trigger("drop",{ dataTransfer });
        cy.get("#todrag>span:nth-child(2)").trigger("dragend");
        dndNative("#todrag>span:nth-child(2)","#mydropzone",true)
        cy.get("#droppedlist span").contains("Draggable 1").should("be.visible")        
    });
    it('Drag and Drop using Website', () => {
        //const dataTransfer=new dataTransfer();
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
        cy.get('#divTwo').trigger('dragstart',{ dataTransfer})
    })
});