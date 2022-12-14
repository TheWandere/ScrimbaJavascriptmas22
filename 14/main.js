// my initial thought 
function countVowelConsonant(str) {
    let r = 0
    str.split('').map(c=>"aeiou".includes(c)?r+=1:r+=2)
    return r
  }
  
  // being forced to use reduce
  function countVowelConsonantReduce(str) {
    return str.split('').reduce((r, c)=>"aeiou".includes(c)?r=r+1:r=r+2, 0)
  }
  
  
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonantReduce(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });