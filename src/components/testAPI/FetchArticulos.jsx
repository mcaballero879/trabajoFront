import { useEffect, useState } from "react";
import Articulos from "./Articulos";

function FetchArticulos() {
  const [productos, setProductos] = useState([]); // Array to hold fetched products

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        // eslint-disable-next-line no-irregular-whitespace
        throw new Error(`HTTP error! status: ${response.status}`);   

      }
      // eslint-disable-next-line no-irregular-whitespace
      const data = await response.json();   

      setProductos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Implement error handling (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures fetching only once

  // Handle loading state while data is being fetched
  if (productos.length === 0) {
    return <p>Loading articles...</p>;
  }

  // Return Articulos component only when data is available
  return (
    <>
      <Articulos productos={productos} />
    </>
  );
}

export default FetchArticulos;