import Haiku from '../src/haiku-creator.js';
const line1 = "this class is hard, wow"
const line2 = "I am so fucking tired"
const line3 = "but we will make it"

describe('Haiku', () => {
    test('should create a haiku object with three lines', () => {
        const haiku = new Haiku(line1, line2, line3);
        expect(haiku.line1).toMatch(line1);
        expect(haiku.line2).toMatch(line2);
        expect(haiku.line3).toMatch(line3);
    })

    test('should check for vowels in each line of haiku', () => {
        const haiku = new Haiku(line1, line2, line3);
        expect(haiku.line1).toContain(['a','e','i','o','u']);
    })
    // test('should find if each line includes a vowel', () => {
    //     const haiku = new Haiku
    //     const haikuVowels = new Haiku (['a', 'e', 'i', 'o', 'u']);
    //     expect (['a', 'e', 'i', 'o', 'u']).toContains(haikuVowels);
    //     expect(haiku.line1.includes(haikuVowels));
    // }
        
    // );
});