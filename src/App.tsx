import { useEffect, useState } from "react";
import { Marca } from "./components/Store/Marca";
import { Category } from "./components/Store/Category";
import { Country } from "./components/countries/Country";
import { Genders } from "./components/geners/Genders";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (

    <div className="App">
      <h1>Hola mundo react
 </h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default App;


