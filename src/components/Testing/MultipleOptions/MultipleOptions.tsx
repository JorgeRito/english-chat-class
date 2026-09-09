export function MultipleOptions({question, options}:{question:string, options:string[]}) {
    return(
        <>
            <h3>{question}</h3>
            <form>
                <div style={{display:"flex", flexDirection:"column"}}>
                
                <label>
                    <input type="radio" name="answer"/>
                    {options[0]}
                </label>
                
                <label>
                    <input type="radio" name="answer"/>
                    {options[1]}
                </label>

                <label>
                    <input type="radio" name="answer"/>
                    {options[2]}
                </label>
                
                <label>
                    <input type="radio" name="answer"/>
                    {options[3]}
                </label>
                </div>
                <button>Check Answers</button>
            </form>
        </>
    )
}