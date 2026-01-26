export interface Student {
  id: string;
  nombreCompleto: string;
  telefono: string;
  plan?: string;
  mod?: string;
  status?: string;
  nivel?: string;
}
export interface StudentAPI {
  id: string;
  nombre_completo: string;
  telefono: string;
  plan?: string;
  mod?: string;
  status?: string;
  nivel?: string;
}

export interface ScheduleRecord {
  student: string;
  fullDate: string;
  time: string;
  mod: string;
}

export interface ScheduleRecordAPI {
  hour: Record<DayIndex, Appointment>;
}

export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5;

export interface Appointment {
  ap_id: string,
  full_name: string,
  mod: string,
  teacher: string
}