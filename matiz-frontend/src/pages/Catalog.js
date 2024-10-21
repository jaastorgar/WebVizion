import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Ejemplo de productos
  const products = [
    { id: 1, name: 'Lentes de Sol', price: 50000 },
    { id: 2, name: 'Armazón Óptico', price: 80000 },
    { id: 3, name: 'Lentes de Contacto', price: 60000 }
  ];

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleReviewOrder = () => {
    navigate('/review-order', { state: { cart } });
  };

  return (
    <div className="catalog-container">
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <h2>Carrito de Compras</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <button onClick={handleReviewOrder} disabled={cart.length === 0}>
        Revisar Pedido
      </button>
    </div>
  );
};

export default Catalog;