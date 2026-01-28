import { OptionsPanel } from "./OptionsPanel/OptionsPanel"
import { CardComponent } from "./CardComponent/CardComponent"
import {  faUsers,  faSchool,  faCalendarAlt, faUser} from "@fortawesome/free-solid-svg-icons";
export function Dashboard() {
    return (
        <>
        <div style={{display:"flex"}}>
            <OptionsPanel icon={faUser}/>
            <CardComponent title="Inicio" icon={faSchool}/>
            <CardComponent title="Estudiantes" icon={faUsers}/>
            <CardComponent title="Horarios" icon={faCalendarAlt}/>
        </div>
        </>
    )
}