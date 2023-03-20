import {useState} from "react";
import {Result} from "@/domain/Result";
import {calculate} from "@/domain/Calculator";
import ResultSheet from "@/components/ResultSheet";

export default function Calculator() {
    const [result, setResult] = useState(new Result());

    function handleInputChange(letters: string) {
        setResult(calculate(letters));
    }

    return (
        <section className="calculator">
            <h1>Calculator</h1>

            <label>
                Enter a word:
                <input
                    onChange={e => handleInputChange(e.target.value)}
                    type={"text"}
                />
            </label>

            <ResultSheet result={result} />
        </section>
    );
}
