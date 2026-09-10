export function AddExercise() {
    return(
        <>
            <h1>Add Exercise</h1>
            <form>
                <div>
                <label>Type: </label>
                <select>
                    <option value="default">Select an option</option>
                    <option value="multiple-option">Multiple Option</option>
                    <option value="fill-blank">Fill the blank</option>
                </select>
                </div>
                <div className="flex flex-col">
                    <input placeholder="Question/Instruction"></input>
                    <input placeholder="Add Option"></input>
                </div>
                <button>Add</button>
            </form>
        </>
    )
}