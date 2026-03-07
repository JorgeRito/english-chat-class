import { useState } from "react"
import { OptionsPanel } from "./OptionsPanel/OptionsPanel"
import { CardComponent } from "./CardComponent/CardComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faCalendarAlt, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Scheduler } from "../Scheduler/Scheduler"
import { NewSchedule } from "../../newSchedule/newSchedule"
import { CreateUserForm } from "../CreateStudent"
import StudentsTable from "../StudentsTable/StudentsTable"
import type { updateDataType } from "../StudentsTable/StudentsTable"
import { deleteUser, updateUser } from "../../api/students.service"
import type { View } from "./dashboardTypes"
import "./Dashboard.css"

const VIEW_TITLES: Record<View, string> = {
    inicio: "Inicio",
    estudiantes: "Estudiantes",
    horario: "Horario",
    "agregar-estudiante": "Agregar Estudiante",
}

export function Dashboard() {
    const [currentView, setCurrentView] = useState<View>("inicio")
    const [updateTable, setUpdateTable] = useState(false)

    const handleDeleteStudent = async (id: string) => {
        await deleteUser(id)
        setUpdateTable((v) => !v)
    }
    const handleSaveStudent = async (id: string, updatedData: updateDataType) => {
        if (updatedData) {
            await updateUser(id, updatedData)
            setUpdateTable((v) => !v)
        }
    }

    return (
        <div className="dashboard-main">
            <OptionsPanel
                currentView={currentView}
                onSelectView={setCurrentView}
            />
            <div className="content-container">
                <header className="content-container__header">
                    {currentView !== "inicio" && (
                        <button
                            type="button"
                            className="content-container__header-back"
                            onClick={() => setCurrentView("inicio")}
                            aria-label="Volver al inicio"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    )}
                    <span>{VIEW_TITLES[currentView]}</span>
                </header>
                {currentView === "inicio" && (
                    <div className="content-container__cards">
                        <CardComponent
                            title="Agregar Estudiante"
                            icon={faUser}
                            onClick={() => setCurrentView("agregar-estudiante")}
                        />
                        <CardComponent
                            title="Estudiantes"
                            icon={faUsers}
                            onClick={() => setCurrentView("estudiantes")}
                        />
                        <CardComponent
                            title="Horario"
                            icon={faCalendarAlt}
                            onClick={() => setCurrentView("horario")}
                        />
                    </div>
                )}
                {currentView === "estudiantes" && (
                    <div className="content-container__body">
                        <StudentsTable
                            updateButton={updateTable}
                            onDelete={handleDeleteStudent}
                            onSave={handleSaveStudent}
                        />
                    </div>
                )}
                {currentView === "horario" && (
                    <div className="content-container__body">
                        <Scheduler />
                        <NewSchedule />
                    </div>
                )}
                {currentView === "agregar-estudiante" && (
                    <div className="content-container__body">
                        <CreateUserForm />
                    </div>
                )}
            </div>
        </div>
    )
}