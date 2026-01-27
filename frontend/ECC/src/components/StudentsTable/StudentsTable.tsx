import {useEffect} from "react";
import {useState} from "react";
import "./table.css";
import {getUsers} from "../../api/students.service";
import type {Student} from "../../types";
import { mapStudentFromAPI } from "../../mapper";

export type updateDataType = Partial<Student> | null;

interface UsersTableProps {
  updateButton: boolean;
  onDelete: (id: string) => Promise<void>;
  onSave: (id: string, updatedData: updateDataType) => Promise<void>;
}

export default function StudentsTable({
  updateButton,
  onDelete,
  onSave
}: UsersTableProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [updateData, setUpdateData] = useState<updateDataType>({});
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getUsers();
      console.log(data)
      setStudents(data.map(mapStudentFromAPI));
    };
    fetchStudents();
  }, [updateButton]);
  if (students.length > 0) {
    return (
      <div>
        <table className="gp-table">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Teléfono</th>
              <th>Nivel</th>
              <th>Plan</th>
              <th>Modalidad</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) =>
              editingId === student.id ? (
                <tr key={student.id}>
                  <td>
                    <textarea
                      defaultValue={student.nombreCompleto}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          nombreCompleto: e.target.value
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={student.telefono}
                      onChange={(e) =>
                        setUpdateData({...updateData, telefono: e.target.value})
                      }
                    />
                  </td>
                  <td>
                    <select
                      defaultValue={student.nivel}
                      onChange={(e) =>
                        setUpdateData({...updateData, nivel: e.target.value})
                      }
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Avanzado">Avanzado</option>
                    </select>
                  </td>
                  <td>
                    <input
                      defaultValue={student.plan}
                      onChange={(e) =>
                        setUpdateData({...updateData, plan: e.target.value})
                      }
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={student.mod}
                      onChange={(e) =>
                        setUpdateData({...updateData, mod: e.target.value})
                      }
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={student.status}
                      onChange={(e) =>
                        setUpdateData({...updateData, status: e.target.value})
                      }
                    />
                  </td>
                  <td>
                    <a
                      style={{display: "inline-block"}}
                      onClick={() => {
                        onSave(student.id, updateData);
                        setEditingId(null);
                        setUpdateData(null);
                      }}
                    >
                      Save
                    </a>
                    <a
                      onClick={() => {
                        setEditingId(null);
                        setUpdateData(null);
                      }}
                    >
                      Cancel
                    </a>
                  </td>
                </tr>
              ) : (
                <tr key={student.id}>
                  <td>{student.nombre_completo}</td>
                  <td>{student.telefono}</td>
                  <td>{student.nivel}</td>
                  <td>{student.plan}</td>
                  <td>{student.mod}</td>
                  <td>{student.status}</td>
                  <td>
                    <a
                      style={{display: "inline-block"}}
                      onClick={() => {
                        setEditingId(student.id);
                        setUpdateData(null);
                      }}
                    >
                      Edit
                    </a>
                    <a onClick={() => onDelete(student.id)}>Delete</a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>No students registered</div>;
  }
}
