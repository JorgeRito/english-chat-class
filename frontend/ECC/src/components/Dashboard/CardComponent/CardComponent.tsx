import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import './CardComponent.css'

export function CardComponent({title,icon}:{title:string, icon:IconDefinition}) {
    return(
        <div className="card-container">
            <FontAwesomeIcon className="icon" icon={icon}/>
            <label className="card-title">{title}</label>
        </div>
    )
}