import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import launchesRoutes from './routes/launchesRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', launchesRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
