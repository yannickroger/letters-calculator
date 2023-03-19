import {Result} from "@/domain/Result";
import {Letters} from "@/domain/Letters";

export const calculate = (word = ""): Result => {
    const result = new Result();
    const letters = new Letters();

    if (!word) {
        return result;
    }

    const wordAsArray = word.split("");

    wordAsArray.forEach(letter => {
        if (letters.isLetterInMap(letter)) {
            result.addToScore(letters.getLetterValue(letter));
        } else {
            result.addToNotFound(letter);
        }
    });

    return result;
};
