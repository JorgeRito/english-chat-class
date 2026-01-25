import { apiClientLocal } from "./apiClient";
import type { Student } from "../types";

export const getData = async () => {
    const response = await apiClientLocal.get("/get_data");
    return response.data;
}

export const createUser = async (userData: Partial<Student>) => {
    const response = await apiClientLocal.post(`/api/create_user`, userData);
    return response.data;
}

export const getUsers = async () => {
    const response = await apiClientLocal.get("/api/get_users");
    return response.data;
}

export const updateUser = async (id: string, payload: Partial<Student>) => {
    const response = await apiClientLocal.put(`/api/update_user/${id}`, payload);
    return response.data;
}

export const deleteUser = async (id: string) => {
    const response = await apiClientLocal.delete(`/api/delete_user/${id}`);
    return response.data;
}
