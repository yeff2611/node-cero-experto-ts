import { buildMakePerson } from '../../src/js-foundation/05-FactoryFunction'

describe('js-foundation/05-factory.ts', () => {
    const getUUID = () => '1234';
    const getAge = () => 35;
    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const yeff = makePerson({ name: 'Yeff', birthdate: '1990-01-27' });
        console.log(yeff);
        expect(yeff).toEqual(
            {
                id: '1234',
                name: 'Yeff',
                birthdate: '1990-01-27',
                age: 35
            })

    })
})