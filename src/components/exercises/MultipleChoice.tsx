import QuestionCard from "../QuestionCard"
import type { ExerciseType } from "../types/Excercise.type"

function MultipleChoice( {exercise}:{exercise: ExerciseType} ) {
    return (
        <QuestionCard>
            <h2>{exercise.question}</h2>
            <form>
                {(exercise.options as string[]).map((option, index) => (
                    <label className="flex items-center gap-2" key={index}>
                        <input type="radio" name="option" value={String.fromCharCode(65 + index)} />
                        {option}
                    </label>
                ))}
                <button type="submit" className="bg-purple-400 text-white py-2 px-4 rounded hover:bg-purple-600 mt-4">
                    Submit
                </button>
            </form>
        </QuestionCard>
    )
}

export default MultipleChoice
