const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');  // Importa la configuración de la base de datos

dotenv.config();
const app = express();

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes); 

// Probar la conexión a la base de datos y sincronizar
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch(err => {
    console.error('Error al sincronizar modelos:', err);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Conexión a PostgreSQL funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});