import React, { useState } from 'react';

const ReviewOrder = () => {
  const cart = [{ name: 'Lentes de Sol', price: 50000 }];
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromo = () => {
    // Lógica para aplicar código promocional
  };

  return (
    <div className="review-order-container">
      <h1>Revisión del Pedido</h1>
      
      {/* Revisión del carrito */}
      <div className="cart-review">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>

      {/* Aplicar código promocional */}
      <div className="promo-section">
        <label>Código Promocional:</label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Ingresa tu código"
        />
        <button onClick={handleApplyPromo}>Aplicar Código</button>
      </div>
    </div>
  );
};

export default ReviewOrder;