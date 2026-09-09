export interface ExerciseType {
    level: string;
    type: string;
    question: string;
    audio?: string;
    options?: string[] | string;
    answer: string;
    explanation?: string;
}