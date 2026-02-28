import { OptionsPanel } from "./OptionsPanel/OptionsPanel"
import { CardComponent } from "./CardComponent/CardComponent"
import { faUsers, faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css"

export function Dashboard() {
    return (
        <div className="dashboard-main">
            <OptionsPanel />
            <div className="content-container">
                <header className="content-container__header">Inicio</header>
                <div className="content-container__cards">
                    <CardComponent title="Agregar Estudiante" icon={faUser} />
                    <CardComponent title="Estudiantes" icon={faUsers} />
                    <CardComponent title="Horario" icon={faCalendarAlt} />
                    
                </div>
            </div>
        </div>
    )
}