import "./WeeklySchecudle.css";
import {StudentHolder} from "./StudentHolder/StudentHolder";
import {getData} from "../../api/students.service";
import {useEffect, useState} from "react";

interface StudentInfo {
  level: string;
  modality: string;
}

interface DayInfo {
  [studentName: string]: StudentInfo;
}

interface HourInfo {
  [dayName: string]: DayInfo;
}

interface ScheduleResponse {
  [hour: string]: HourInfo;
}

export function WeeklySchedule() {
  const [schedule, setSchedule] = useState<ScheduleResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const workDays = [
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO"
  ];

  // Función para convertir hora a minutos desde medianoche para ordenar
  const parseTime = (timeStr: string): number => {
    const match = timeStr.match(/(\d{1,2})(AM|PM)/);
    if (!match) return 0;

    let hour = parseInt(match[1]);
    const period = match[2];

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    return hour * 60;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getData();
        setSchedule(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Weekly Schedule</h1>
      <h2>Mes Dia Inicio - Dia Final</h2>
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
          {schedule &&
            Object.keys(schedule)
              .sort((a, b) => parseTime(a) - parseTime(b))
              .map((hour) => {
                const hourData = schedule[hour];
                return (
                  <tr key={hour} className="hour-row">
                    <td>{hour}</td>
                    {workDays.map((day) => (
                      <td key={day}>
                        {hourData[day] &&
                          Object.keys(hourData[day]).map((student) => (
                            <StudentHolder
                              key={student}
                              studentName={student}
                              modality={hourData[day][student].modality}
                              level={hourData[day][student].level}
                            />
                          ))}
                      </td>
                    ))}
                  </tr>
                );
              })}
          {/* <tr>
                <td>7:00am</td>
                <td>
                    <div>
                        <StudentHolder studentName="Sol Marquez" modality="💻" level="A1"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>8:00am</td>
                <td>
                </td>
                <td>
                    <div>
                        <StudentHolder studentName="Daniel Perez" modality="🧑‍🏫" level="A2"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>9:00am</td>
            </tr>
            <tr>
                <td>10:00am</td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
}
