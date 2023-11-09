import { getUUID } from '../../src/plugins/get-uuid.plugin'

describe('plugins/get-uuid.plugins.ts', () => {
    test('getUUID() should return a UUID', () => {
        const uuid = getUUID();

        expect(typeof uuid).toBe('string')
        expect(uuid.length).toBe(36)
    })
})