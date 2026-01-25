import "./newSchedule.css";
import {useEffect, useState} from "react";
import {getMonthWeeks} from "../api/schedule.service";
export function NewSchedule() {
  const [weeks, setWeeks] = useState<string[]>([]);

  const now = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMonthWeeks(now.getFullYear());
      setWeeks(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Weekly Schedule</h1>
      {/* <h2>Mes Dia Inicio - Dia Final</h2> */}
      <select>
        {weeks.map((week) => (
          <option key={week} value={week}>
            {week}
          </option>
        ))}
      </select>
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
