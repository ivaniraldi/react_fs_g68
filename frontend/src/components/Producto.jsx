/* eslint-disable react/prop-types */
export default function Producto({
  image = "https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg",
  title = "Producto sin nombre",
  desc = "No hay una descripcion disponible",
  price = "No se ingreso un valor",
  stock = 0,
}) {
  let stockBajo = {
    color: "red",
  };
  let conStock = {
    color: "green",
  };

  return (
    <div className="cartaProducto">
      <img src={image} style={{ width: "300px" }} alt="" />
      <h2 id="nombreProducto">{title}</h2>
      <p style={stock >= 5 ? conStock : stockBajo}>
        Stock disponible: {stock == 0 ? "No queda stock" : stock}
      </p>
      <p>Descripcion del producto: {desc}</p>
      <h3>${price}</h3>
    </div>
  );
}
