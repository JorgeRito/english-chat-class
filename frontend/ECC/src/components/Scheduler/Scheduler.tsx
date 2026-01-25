import {useEffect, useState} from "react";
import type {Student, ScheduleRecord, StudentAPI} from "../../types";
import "../CreateStudent/form.css";
import {getUsers} from "../../api/students.service";
import {createAppointment} from "../../api/schedule.service";
import {mapStudentFromAPI} from "../../mapper";

const modalities = ["Presencial", "Online", "Híbrido"];
const timeSlots = ["8AM", "9AM"];

export function Scheduler() {
  const [newAppointment, setNewAppointment] = useState<ScheduleRecord | null>(
    null
  );

  const handleSubmit = async () => {
    const student = (document.getElementById("sh-student") as HTMLInputElement)
      .value;
    const date = (document.getElementById("sh-date") as HTMLInputElement).value;
    const time = (document.getElementById("sh-time") as HTMLInputElement).value;
    const mod = (document.getElementById("sh-mod") as HTMLInputElement).value;
    setNewAppointment({
      student: student,
      fullDate: date,
      time: time,
      mod: mod
    });
    console.log(newAppointment);
    createAppointment(newAppointment!);
    console.log(student, date, time, mod);
  };

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const data: StudentAPI[] = await getUsers();
      setStudents(data.map(mapStudentFromAPI));
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="form-container">
        <h2>Agendar Estudiante</h2>
        <select id="sh-student" defaultValue="">
          <option value="" disabled>
            Selecciona un estudiante
          </option>
          {students.map((student) => (
            <option key={student.id} value={student.nombreCompleto}>
              {student.nombreCompleto}
            </option>
          ))}
        </select>
        <input type="date" id="sh-date"></input>
        <select id="sh-time" defaultValue="">
          <option value="" disabled>
            Selecciona una hora
          </option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <select id="sh-mod" defaultValue="">
          <option value="" disabled>
            Selecciona una modalidad
          </option>
          {modalities.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Agendar</button>
      </div>
    </div>
  );
}
