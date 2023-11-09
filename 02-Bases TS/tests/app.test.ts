
// A:Arrange A:Atuar A: Assert
describe('Test in the app file', () => {
    test('should be 30', () => {

        //1. Arrange
        const n1 = 10;
        const n2 = 20;

        //2 Act
        const result = n1 + n2;

        //3. Assert
        expect(result).toBe(30)
    })
})