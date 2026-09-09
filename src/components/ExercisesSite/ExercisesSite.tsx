import { ExerciseRenderer } from "../ExerciseRenderer"

const mockExercise = {
  "question": "Testing question",
  "options": ["option1", "option2"],
  "level": "begginer",
  "answer": "option1",
  "type": "multiple-choice"
}

export function ExersicesSite() {
    return( 
        <div className="pr-20 pl-20 pt-10">
            <ExerciseRenderer exercise={mockExercise}/>
        </div>
    )
}