import "./newSchedule.css";
import {useEffect, useState} from "react";
import {getMonthWeeks, getWeekAppointments} from "../api/schedule.service";
export function NewSchedule() {
  const [weeks, setWeeks] = useState<string[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0]);
  const now = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMonthWeeks(now.getFullYear());
      setWeeks(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedWeek) {
      const fetchAppointments = async () => {
        const appointments = await getWeekAppointments(selectedWeek);
        console.log(appointments);
      };
      fetchAppointments();
    }
  }, [selectedWeek]);

  return (
    <div>
      <h1>Calendario Semanal</h1>
      <h2>Semana: {selectedWeek || "Selecciona y presiona actualizar"}</h2>
      {/* <h2>Mes Dia Inicio - Dia Final</h2> */}
      <select id="week-range-select">
        {weeks.map((week) => (
          <option key={week} value={week}>
            {week}
          </option>
        ))}
      </select>
      <button
        id="update-week-btn"
        onClick={() => {
          setSelectedWeek(
            (document.getElementById("week-range-select") as HTMLSelectElement)
              ?.value || ""
          );
        }}
      >
        Actualizar
      </button>
      <table className="ws-table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
