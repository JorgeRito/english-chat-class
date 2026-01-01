import {useEffect, useState} from "react";
import type { Student } from "../StudentsTable/StudentsTable";

export function Scheduler() {

    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch("http://localhost:5000/api/get_users");
            const data = await response.json();  
            setStudents(data);
        };
        fetchStudents();
    },[])

    return (
        <div>
            <form className="form-container">
                <h2>Agendar Estudiante</h2>
                <select>
                    <option value="" disabled selected>Selecciona un estudiante</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>{student.nombre_completo}</option>
                    ))}
                </select>
                <input type="date"></input>
                <select>
                    <option value="" disabled selected>Selecciona una hora</option>
                </select>
                <select>
                    <option value="" disabled selected>Selecciona una modalidad</option>
                </select>
            </form>
        </div>
    )   
}