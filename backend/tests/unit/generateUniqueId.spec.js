const generateUniqueId = require('../../src/utils/generateUniqueIds');


describe('Generate Unique ID', () => {
    it('should genrate an unique ID', () =>{
        const id =generateUniqueId();
        
        expect(id).toHaveLength(8);
    }) 
});