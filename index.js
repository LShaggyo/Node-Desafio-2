import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import repertorioRoutes from './routes/repertorioRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Crea el __dirname para módulos ES
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); 

// Servir archivos estáticos
app.use('/repertorio', express.static(path.join(__dirname, 'Frontend')));

// Rutas API con prefijo
app.use('/api/repertorio', repertorioRoutes);

// Manejadores de errores
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Levantamiento del Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
