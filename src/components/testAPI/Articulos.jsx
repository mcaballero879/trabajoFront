
const Articulos = ({productos}) => {
    return(
    <div>
    {productos.map((producto) => (
      <div key={producto.id}>
        <p>{producto.title}</p>
        <p>{producto.price}</p>
      </div>
    ))}
  </div>
  )

} 
export default Articulos
