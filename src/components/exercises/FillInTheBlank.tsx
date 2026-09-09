import QuestionCard from "../QuestionCard";
import { ExerciseType } from "../types/Excercise.type";

function FillInTheBlank({exercise}:{exercise: ExerciseType}) {
    return (
        <QuestionCard>
        <h1>Type the right tense</h1>
        <h2>{exercise.question} {exercise.options}</h2>
        <input className="pl-2 bg-white" type="text"/>
        </QuestionCard>
    )
}

export default FillInTheBlank