import { useEffect, useState } from "react";

export const Country  = () => {
    const [pais, setPais] = useState([])

    const API_URL = "http://localhost:3000";
    const PAIS_ENDPOINT = "pais ";

    const getPais = async () => {
        const response = await fetch(`${API_URL}/${PAIS_ENDPOINT}`)
        const data = await response.json();
        setPais (data)
    }

    useEffect(() => {
        getPais();
    }, []);

    return (
        <div>

            <div>
                <h2>Paises</h2>
            {pais.map((pais: any) => (
            <div key={pais.id}>{pais.name}</div>
            ))}
            </div>
        </div>
    )
}
