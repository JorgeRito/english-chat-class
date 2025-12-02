import { apiClient } from "./apiClient";

export const getStudents = async () => {
    const response = await apiClient.get("/get_data");
    return response.data;
}