export class Result {
    score: number;
    notFound: string[];
    constructor(score = 0, notFound:string[] = []) {
        this.score = score;
        this.notFound = notFound;
    }

    addToScore(value = 0) {
        this.score = this.score + value;
    }

    addToNotFound(letter = "") {
        if (letter === " " || letter === "") {
            return;
        }

        this.notFound.push(letter);
    }
}
