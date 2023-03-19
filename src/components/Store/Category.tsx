import { useEffect, useState } from "react";

export const Category  = () => {
    const [categories, setCategories] = useState([])

    const API_URL = "http://localhost:3000";
    const CATEGORY_ENDPOINT = "categories";

    const getCategories = async () => {
        const response = await fetch(`${API_URL}/${CATEGORY_ENDPOINT}`)
        const data = await response.json();
        setCategories (data)
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>

            <div>
                <h2>Categorias</h2>
            {categories.map((categories: any) => (
            <div key={categories.id}>{categories.name}</div>
            ))}
            </div>
        </div>
    )
}
