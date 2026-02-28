import './OptionPanel.css'

export function OptionsPanel() {
    const options = [
        "Inicio",
        "Estudiantes",
        "Horarios",
        "Pagos",
    ]

    return <div className="option-panel">
        <div className='panel-top'>
            <div className="user-img">
                <img src="/ecc_logo.png" alt="ECC Logo" />
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