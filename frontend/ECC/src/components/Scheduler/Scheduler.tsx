import {useEffect, useState} from "react";
import type {Student} from "../StudentsTable/StudentsTable";

interface ScheduleRecord {
  Student: string;
  Date: string;
  Time: string;
  Mod: string;
}

export function Scheduler() {
  const [newClass, setNewClass] = useState<ScheduleRecord>();

  const handleSubmit = () => {
    const student = (document.getElementById("sh-student") as HTMLInputElement)
      .value;
    const date = (document.getElementById("sh-date") as HTMLInputElement).value;
    const time = (document.getElementById("sh-time") as HTMLInputElement).value;
    const mod = (document.getElementById("sh-mod") as HTMLInputElement).value;
    console.log(student, date, time, mod);
  };

  const [students, setStudents] = useState<Student[]>([]);

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     const response = await fetch("http://localhost:5000/api/get_users");
  //     const data = await response.json();
  //     setStudents(data);
  //   };
  //   fetchStudents();
  // }, []);

  return (
    <div>
      <div className="form-container">
        <h2>Agendar Estudiante</h2>
        <select id="sh-student" defaultValue="test">
          <option value="" disabled selected>
            Selecciona un estudiante
          </option>
          {students.map((student) => (
            <option key={student.id} value={student.nombre_completo}>
              {student.nombre_completo}
            </option>
          ))}
        </select>
        <input type="date" id="sh-date"></input>
        <select id="sh-time" defaultValue="">
          <option value="" disabled selected>
            Selecciona una hora
          </option>
        </select>
        <select id="sh-mod" defaultValue="">
          <option value="" disabled selected>
            Selecciona una modalidad
          </option>
        </select>
        <button onClick={handleSubmit}>Agendar</button>
      </div>
    </div>
  );
}
