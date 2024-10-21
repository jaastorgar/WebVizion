import React, { useState } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan@example.com');
  const [address, setAddress] = useState('123 Calle Principal');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [points, setPoints] = useState(500);  // Puntos acumulados por el cliente

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se guardaría la información del perfil (actualmente solo lo mostramos en consola)
    console.log({
      name,
      email,
      address,
      isSubscribed,
    });
    alert('¡Tu perfil ha sido actualizado con éxito!');
  };

  const redeemPoints = () => {
    if (points >= 100) {
      setPoints(points - 100);  // Canjear 100 puntos
      alert('¡Has canjeado 100 puntos por un descuento de $1000!');
    } else {
      alert('No tienes suficientes puntos para canjear.');
    }
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={isSubscribed} 
              onChange={(e) => setIsSubscribed(e.target.checked)} 
            />
            Suscribirse a boletines
          </label>
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>

      {/* Programa de Puntos */}
      <div style={{ marginTop: '20px' }}>
        <h2>Programa de Puntos</h2>
        <p>Puntos Acumulados: {points}</p>
        <button onClick={redeemPoints}>Canjear 100 Puntos</button>
      </div>
    </div>
  );
};

export default UserProfile;