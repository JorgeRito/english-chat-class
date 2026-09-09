function QuestionCard({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-purple-200 p-4 rounded-lg mt-3">
            {children}
        </div>
    )
}

export default QuestionCard