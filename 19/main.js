function centuryFromYear(num) {
    return num % 100 === 0 ?  num/100 : Math.floor(num/100)+1
}

/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
    it('returns current century for edge case of end of century', () => {
        // arrange
        const year = 1699;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(17);
    });  
});