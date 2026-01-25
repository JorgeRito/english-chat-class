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