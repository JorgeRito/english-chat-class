import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import './CardComponent.css'

interface CardComponentProps {
    title: string
    icon: IconDefinition
    onClick?: () => void
}

export function CardComponent({ title, icon, onClick }: CardComponentProps) {
    return (
        <div
            className="card-container"
            role="button"
            tabIndex={0}
            onClick={onClick}
        >
            <FontAwesomeIcon className="icon" icon={icon} />
            <label className="card-title">{title}</label>
        </div>
    )
}