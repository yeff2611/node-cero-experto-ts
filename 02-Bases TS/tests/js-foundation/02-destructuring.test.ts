import { characters } from '../../src/js-foundation/02-destructuring'

describe('js-foundation/02-destructuring.js', () => {
    test('characteres should cointaint batman', () => {
        expect(characters).toContain('batman')
    });
    test('first character should be flash and secodn superman', () => {
        const [flash, superman] = characters
        expect(flash).toBe('flash');
        expect(superman).toBe('superman')
    })

})
