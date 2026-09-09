import type { ChangeEvent } from "react"
import { useState } from "react"
function Uploader() {

    const [file, setFile] = useState<File | null>(null)

    const handleFileChange= (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            setFile(e.target.files[0])
        }
    }

    const handleFileUpload = async() => {
        if(!file) return;
        const formData = new FormData();
        formData.append('file', file)
    

        try{
            const response = await fetch('http://localhost:8000/exercises/add', 
                {
                    method:"POST",
                    body: formData
                });
                if (!response.ok) throw new Error('Error al subir el archivo');
                const data = await response.json();
                console.log('Archivo subido con exito', data)
        }catch (error){
            console.log('Error en la subida',error)
        }
    };
    return (
        <>
        <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleFileChange}/>
        <button onClick={handleFileUpload}>
            Enviar archivo
        </button>
        </>
    )
}

export default Uploader