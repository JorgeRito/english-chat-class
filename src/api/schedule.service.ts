import { apiClientLocal } from "./apiClient";
import type { ScheduleRecord } from "../types";

export const getMonthWeeks = async (year: number) => {
    const response = await apiClientLocal.get(`/api/get_month_weeks/${year}`);
    return response.data;
}

export const createAppointment = async (appointmentData: ScheduleRecord) => {
    const response = await apiClientLocal.post(`/api/schedule/create_appointment`, appointmentData);
    return response.data;
}

export const getWeekAppointments = async (weekLabel: string) => {
    const response = await apiClientLocal.get(`/api/schedule/read_appointments_by_week/${weekLabel}`);
    return response.data;
}