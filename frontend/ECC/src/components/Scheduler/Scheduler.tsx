import {useEffect, useState} from "react";
import type {Student, ScheduleRecord, StudentAPI} from "../../types";
import "../CreateStudent/form.css";
import {getUsers} from "../../api/students.service";
import {createAppointment} from "../../api/schedule.service";
import {mapStudentFromAPI} from "../../mapper";

const modalities = ["Presencial", "Online"];
const timeSlots = {
  "07:00": "7:00AM",
  "08:00": "8:00AM",
  "09:00": "9:00AM",
  "10:00": "10:00AM",
  "11:00": "11:00AM",
  "12:00": "12:00PM",
  "13:00": "1:00PM",
  "14:00": "2:00PM",
  "15:00": "3:00PM",
  "16:00": "4:00PM",
  "17:00": "5:00PM",
  "18:00": "6:00PM",
  "19:00": "7:00PM",
  "20:00": "8:00PM",
  "21:00": "9:00PM"
};

export function Scheduler() {
  const handleSubmit = async () => {
    const student = (document.getElementById("sh-student") as HTMLInputElement)
      .value;
    const date = (document.getElementById("sh-date") as HTMLInputElement).value;
    const time = (document.getElementById("sh-time") as HTMLInputElement).value;
    const mod = (document.getElementById("sh-mod") as HTMLInputElement).value;
    const payload: ScheduleRecord = {
      student: student,
      fullDate: date,
      time: time,
      mod: mod
    };
    await createAppointment(payload);
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
          {Object.entries(timeSlots).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
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
