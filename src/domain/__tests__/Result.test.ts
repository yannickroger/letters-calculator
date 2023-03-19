import {Result} from "@/domain/Result";

describe("Result", () => {
    it("should have a score with 0 as a default value", () => {
        let result = new Result();
        expect(result.score).toBe(0);
    });

    it("should have an array of letters not found, empty by default", () => {
        let result = new Result();
        expect(result.notFound).toEqual([]);
    });

    it("should allow to increment the score", () => {
        let increment = 42;
        let result = new Result();
        result.addToScore(); // should do nothing
        result.addToScore(increment);
        expect(result.score).toBe(increment);
    });

    it("should allow to add not found letters", () => {
        let letter = "y";
        let result = new Result();
        result.addToNotFound(letter);
        expect(result.notFound).toEqual([letter]);
    });

    it("should ignore white spaces as a letter not found", () => {
        let result = new Result();
        result.addToNotFound();
        result.addToNotFound("");
        result.addToNotFound(" ");
        expect(result.notFound).toEqual([]);
    });

    it("should be possible to create a result with all params", () => {
        const score = 42;
        const notFound = ["a"];

        let result = new Result(score, notFound);

        expect(result.score).toBe(score);
        expect(result.notFound).toEqual(notFound);
    });
});
