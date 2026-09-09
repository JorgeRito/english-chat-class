import { MultipleOptions } from "./MultipleOptions/MultipleOptions"

export function Testing({title} : {title:string}) {
    return(
        <>
            <h1>
                {title}
            </h1>
            <audio controls>
                  <source 
                  src="/english-chat-class/sounds_eng-00381.mp3" 
                  type="audio/mpeg"></source>
            </audio>
            <video width="320" height="240" controls>
                <source src="/english-chat-class/COMPA.mp4" type="video/mp4"/>
            </video>
        <MultipleOptions 
        question="Question Placeholder"
        options={["option 1","option 2","option 3","option 4"]}/>
        <MultipleOptions 
        question="Question Placeholder"
        options={["option 1","option 2","option 3","option 4"]}/>

            {/* src="https://motionarray.imgix.net/motion-array-2972061-IGM91GiLCk-high_0000.jpg?w=660&q=60&fit=max&auto=format" */}
        </>
    )
}