import { getUserById } from '../../src/js-foundation/03-callbacks'


describe('js.foundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done()
        })
    })
    test('getUserById should return id if user exist', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(user).toStrictEqual({
                id: 1,
                name: 'Jhonn Doe'
            });
            expect(err).toBeUndefined();
            done()
        })
    })
})