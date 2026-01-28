import "./form.css";
import StudentsTable from "../StudentsTable/StudentsTable.tsx";
import type {updateDataType} from "../StudentsTable/StudentsTable.tsx";
import {useState} from "react";
import {
  createUser,
  deleteUser,
  updateUser
} from "../../api/students.service.ts";
import type {Student} from "../../types";

export function CreateUserForm() {
  const [update, setUpdate] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const payload = {
      nombreCompleto: formData.get("nombre_completo"),
      telefono: formData.get("telefono"),
      plan: formData.get("plan") || "",
      mod: formData.get("mod") || "",
      status: formData.get("status") || "",
      nivel: formData.get("level") || ""
    };
    await createUser(payload as Partial<Student>);

    setUpdate(!update);
    const userInput = document.getElementById(
      "nombre_completo"
    ) as HTMLInputElement;
    const phoneInput = document.getElementById("telefono") as HTMLInputElement;
    const planInput = document.getElementById("plan") as HTMLInputElement;
    const modInput = document.getElementById("mod") as HTMLInputElement;
    const statusInput = document.getElementById("status") as HTMLInputElement;
    const levelSelect = document.getElementById("level") as HTMLSelectElement;
    userInput.value = "";
    phoneInput.value = "";
    planInput.value = "";
    modInput.value = "";
    statusInput.value = "";
    levelSelect.value = "default";
  };
  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUpdate(!update);
  };
  const handleSave = async (id: string, updatedData: updateDataType) => {
    if (updatedData) {
      try {
        await updateUser(id, updatedData);
        setUpdate(!update);
        // alert("Usuario actualizado exitosamente");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="post" className="form-container">
        <h2>Ingresa la informacion del nuevo estudiante</h2>
        <input
          placeholder="Nombre Completo"
          type="text"
          id="nombre_completo"
          name="nombre_completo"
          required
        />
        <input
          placeholder="Teléfono"
          type="text"
          id="telefono"
          name="telefono"
          required
        />
        <input placeholder="Plan" type="text" id="plan" name="plan" />
        <input placeholder="Modalidad" type="text" id="mod" name="mod" />
        <input placeholder="Status" type="text" id="status" name="status" />
        <select id="level" name="level">
          <option value="default">Nivel</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>
        <button className="btn-primary" type="submit">Crear Usuario</button>
      </form>
      <StudentsTable
        updateButton={update}
        onDelete={handleDelete}
        onSave={handleSave}
      />
    </div>
  );
}
