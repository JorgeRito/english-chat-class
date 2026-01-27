import "./newSchedule.css";
import {useEffect, useState} from "react";
import {getMonthWeeks, getWeekAppointments} from "../api/schedule.service";
import type {ScheduleRecordAPI, Appointment} from "../types";
import { StudentHolder } from "../components/WeeklySchedule/StudentHolder/StudentHolder";
export function NewSchedule() {
  const [weeks, setWeeks] = useState<string[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [scheduleAppointments, setScheduleAppointments] = useState<ScheduleRecordAPI | null>(null);

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
        const appointments: ScheduleRecordAPI = await getWeekAppointments(selectedWeek);
        // console.log(appointments);
        setScheduleAppointments(appointments);
      };
      fetchAppointments();
    }
  }, [selectedWeek]);

  useEffect(() => {
    // console.log("scheduleAppointments:", scheduleAppointments);
  }, [scheduleAppointments]);

  return (
    <div>
      <h1>Calendario Semanal</h1>
      <h2>Semana: {selectedWeek || "Selecciona y presiona actualizar"}</h2>
      {/* <h2>Mes Dia Inicio - Dia Final</h2> */}
      <select id="week-range-select" onChange={(e) => setSelectedWeek(e.target.value)}>
        <option value="">Selecciona una semana</option>
        {weeks.map((week) => (
          <option key={week} value={week}>
            {week}
          </option>
        ))}
      </select>
      {!scheduleAppointments ? (<p>No hay datos de la semana seleccionada.</p>) : 
      (
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
        <tbody>
          {Object.keys(scheduleAppointments).map((hour) => (
            <tr key={hour}>
              <td>{hour}</td>
              {[0, 1, 2, 3, 4, 5].map((dayNum) => {
                const dayKey = String(dayNum);
                const appointments = scheduleAppointments[hour][dayKey] || [];
                
                return (
                  <td key={dayKey}>
                    {appointments.length === 0 ? (
                      <span>-</span>
                    ) : (
                      appointments.map((appointment: Appointment, index: number) => (
                        <div key={appointment.ap_id || index} style={{ marginBottom: '8px' }}>
                          <StudentHolder studentName={appointment.full_name} modality="O" level="BEG" />
                        </div>
                      ))
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  );
}
