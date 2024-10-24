const { Sequelize } = require('sequelize');
require('dotenv').config();  // Para usar las variables de entorno

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Evita mostrar las consultas SQL en la consola
});

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a PostgreSQL:', err);
  });

module.exports = sequelize;