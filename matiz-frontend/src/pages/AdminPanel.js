import React from 'react';

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <h1>Panel Administrativo</h1>
      <p>
        Bienvenido al panel administrativo. Aquí podrás gestionar productos, citas, y reportes de ventas.
      </p>

      <div className="admin-actions">
        <div className="action-item">
          <h3>Gestión de Productos</h3>
          <p>Agregar, editar o eliminar productos del catálogo.</p>
          <button>Ir a Gestión de Productos</button>
        </div>

        <div className="action-item">
          <h3>Gestión de Citas</h3>
          <p>Administrar las citas de los clientes.</p>
          <button>Ir a Gestión de Citas</button>
        </div>

        <div className="action-item">
          <h3>Reportes de Ventas</h3>
          <p>Consultar reportes de ventas diarias, mensuales y anuales.</p>
          <button>Ir a Reportes de Ventas</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;