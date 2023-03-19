import {Letters} from "@/domain/Letters";

describe("Letters", () => {
    it("should say when it has a specific letter", function() {
        const letters = new Letters();

        expect(letters.isLetterInMap('ы')).toBeTruthy();
    });

    it("should say when it doesn't havea specific letter", function() {
        const letters = new Letters();

        expect(letters.isLetterInMap('a')).toBeFalsy();
    });

    it("should provide the value of a specific letter", function() {
        const letters = new Letters();

        expect(letters.getLetterValue('ы')).toBe(29);
    });

    it("should warn when a specific letter is not found", function() {
        const letters = new Letters();

        expect(() => letters.getLetterValue('a')).toThrow('Letter not found');
    });
});
