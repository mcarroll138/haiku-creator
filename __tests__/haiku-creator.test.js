import Haiku from '../src/haiku-creator.js';

describe('Haiku', () => {
    test('should create a haiku object with three lines', () => {
        const haiku = new Haiku("a", "b", "c");
        expect(haiku.line1).toMatch("a");
        expect(haiku.line2).toMatch("b");
        expect(haiku.line3).toMatch("c");
    })

});