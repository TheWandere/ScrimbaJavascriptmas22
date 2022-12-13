function validTime(str) {
    const [h, min] = str.split(':')
    return str.split(':').length === 2 
    && inBetween(parseInt(h), 0,23)
    && inBetween(parseInt(min), 0, 59)
}

function inBetween(nr, min, max){
    return nr >= min && nr <= max
}


/**
* Test Suite 
*/
describe('validTime()', () => {
    it('edge case 00:00', () => {
        // arrange
        const str = '00:00';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    
    it('edge case 24:59', () => {
        // arrange
        const str = '24:60';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 4: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 5: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});