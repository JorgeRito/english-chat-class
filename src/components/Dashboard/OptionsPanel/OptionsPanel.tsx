import type { View } from "../dashboardTypes"
import "./OptionPanel.css"

const OPTION_TO_VIEW: Partial<Record<string, View>> = {
    Inicio: "inicio",
    Estudiantes: "estudiantes",
    Horarios: "horario",
}

interface OptionsPanelProps {
    currentView: View
    onSelectView: (view: View) => void
}

export function OptionsPanel({ currentView, onSelectView }: OptionsPanelProps) {
    const options = ["Inicio", "Estudiantes", "Horarios", "Pagos"]

    return (
        <div className="option-panel">
            <div className="panel-top">
                <div className="user-img">
                    <img src="/ecc_logo.png" alt="ECC Logo" />
                </div>
                {options.map((option: string) => {
                    const view = OPTION_TO_VIEW[option]
                    const isActive = view !== undefined && view === currentView
                    return (
                        <div
                            className={`panel-option${isActive ? " active" : ""}`}
                            key={option}
                            role={view ? "button" : undefined}
                            tabIndex={view ? 0 : undefined}
                            onClick={
                                view
                                    ? () => onSelectView(view)
                                    : undefined
                            }
                        >
                            <label>{option}</label>
                        </div>
                    )
                })}
            </div>
            <div className="panel-option logout">Salir</div>
        </div>
    )
}