import {Result} from "@/domain/Result";

export default function ResultSheet({result}: {result:Result}) {
    return (
        <section className="result">
            <p>Result is: {result.score}</p>
            <p>Ignored letters are: {result.notFound}</p>
        </section>
    );
}
