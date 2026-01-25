import type{ Student, StudentAPI } from "./types"
export const mapStudentFromAPI = (apiStudent: StudentAPI): Student => {
    return {
        id: apiStudent.id,
        nombreCompleto: apiStudent.nombre_completo,
        telefono: apiStudent.telefono,
        plan: apiStudent.plan,
        mod: apiStudent.mod,
        status: apiStudent.status,
        nivel: apiStudent.nivel
    }
}