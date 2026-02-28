import { OptionsPanel } from "./OptionsPanel/OptionsPanel"
import { CardComponent } from "./CardComponent/CardComponent"
import {  faUsers,  faSchool,  faCalendarAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import { Scheduler } from "../Scheduler/Scheduler";
import { NewSchedule } from "../../newSchedule/newSchedule";
import "./Dashboard.css"
import { CreateUserForm } from "../CreateStudent";
export function Dashboard() {
    return (
        <div className="dashboard-main">
            <OptionsPanel icon={faUser}/>
            <div className="content-container">
                <Scheduler/>
                <NewSchedule/>
                <CreateUserForm/>
                
                {/* <div className="dashboard-header">DASHBOARD</div>
                <CardComponent title="Inicio" icon={faSchool}/>
                <CardComponent title="Estudiantes" icon={faUsers}/>
                <CardComponent title="Horarios" icon={faCalendarAlt}/> */}

            </div>
        </div>
    )
}