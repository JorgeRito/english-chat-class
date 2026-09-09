import MultipleChoice from './exercises/MultipleChoice';
import type { ExerciseType } from './types/Excercise.type';
import FillInTheBlank from './exercises/FillInTheBlank';

export function ExerciseRenderer({ exercise }: { exercise: ExerciseType }) {
    switch (exercise.type) {
        case 'multiple-choice':
            return (
                <MultipleChoice exercise={exercise} />
            )
        case 'fill-blank':
            return(
                <FillInTheBlank exercise={exercise}/>
            )
    }
}

