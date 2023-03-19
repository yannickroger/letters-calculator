import {Result} from "@/domain/Result";
import {calculate} from "@/domain/Calculator";

describe("Calculate", () => {
    let testedItems = new Map([
        // ['tested value', expected result]

        // empty values
        ["", new Result(0, [])],
        ["a", new Result(0, ["a"])],

        // valid values
        ["х", new Result(23, [])],
        ["хт", new Result(43, [])],
        ["хт ", new Result(43, [])],
        [" хт àà", new Result(43, ["à", "à"])]
    ]);

    it("Should calculate strings", function() {
        testedItems.forEach(function(expectedResult, word) {
            expect(calculate(word)).toEqual(expectedResult);
        });
    });
});
