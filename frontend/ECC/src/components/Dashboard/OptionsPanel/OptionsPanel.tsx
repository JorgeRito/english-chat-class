import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OptionPanel.css'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
export function OptionsPanel({icon}:{icon:IconDefinition}) {
    const options = [
        "Inicio",
        "Estudiantes",
        "Horarios",
        "Pagos",
    ]

    return <div className="option-panel">
        <div className='panel-top'>
            <div className="user-img">
                <FontAwesomeIcon icon={icon}/>
                <img alt="user-profile-pic"/>
                
            </div>
            
            {options.map((option: string) => (
                <div className="panel-option" key={option}>
                    <label>{option}</label>
                </div>
            ))}
        </div>
            <div className='panel-option logout'>Salir</div>
    </div>
}