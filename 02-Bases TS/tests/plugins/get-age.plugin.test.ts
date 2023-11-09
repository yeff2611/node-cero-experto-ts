import { getAge } from "../../src/plugins/get-age.plugin";

describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a peson', () => {
        const birthdate = '1990-01-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthdate = '1995-01-01';
        const age = getAge(birthdate)
        console.log(age);

        expect(age).toBe(getAge(birthdate))
    });

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1997);

        const birthdate = '1995-05-01';
        const age = getAge(birthdate);
        expect(age).toBe(0)

    })
})