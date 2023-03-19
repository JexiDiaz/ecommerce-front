import { useEffect, useState } from "react";

export const Marca  = () => {
    const [marcas, setMarcas] = useState([])

    const API_URL = "http://localhost:3000";
    const MARCA_ENDPOINT = "marcas";

    const getCategories = async () => {
        const response = await fetch(`${API_URL}/${MARCA_ENDPOINT}`)
        const data = await response.json();
        setMarcas (data)
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>

            <div>
            <h2>Marcas</h2>
            {marcas.map((marcas: any) => (
            <div key={marcas.id}>{marcas.name}</div>
            ))}
            </div>
        </div>
    )
}
