import React, { useState } from 'react';
import SalesChart from './SalesChart';

const AdminDashboard = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Lentes de Sol', stock: 20 },
    { id: 2, name: 'Armazón Óptico', stock: 15 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', stock: 0 });

  // Función para agregar un nuevo producto al inventario
  const addProduct = () => {
    setInventory([
      ...inventory,
      { id: inventory.length + 1, name: newProduct.name, stock: newProduct.stock },
    ]);
    setNewProduct({ name: '', stock: 0 }); // Reiniciar el formulario
  };

  // Función para actualizar el stock de un producto existente
  const updateStock = (id, newStock) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, stock: newStock } : item
      )
    );
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Panel de Control - Gestión Interna</h1>

      <section className="inventory-section">
        <h2>Gestión de Inventario</h2>
        <ul className="inventory-list">
          {inventory.map((item) => (
            <li key={item.id}>
              {item.name} - Stock: {item.stock}
              <input
                type="number"
                value={item.stock}
                onChange={(e) => updateStock(item.id, parseInt(e.target.value))}
                min="0"
              />
            </li>
          ))}
        </ul>

        <h3>Agregar Nuevo Producto</h3>
        <div className="add-product-form">
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Nombre del Producto"
            required
          />
          <input
            type="number"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
            placeholder="Cantidad de Stock"
            min="0"
            required
          />
          <button onClick={addProduct}>Agregar Producto</button>
        </div>
      </section>

      <section className="sales-chart-section">
        <h2>Estadísticas de Ventas</h2>
        <SalesChart />
      </section>
    </div>
  );
};

export default AdminDashboard;