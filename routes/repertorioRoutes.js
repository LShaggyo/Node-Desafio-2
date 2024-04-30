import express from 'express';
import {
  getAllRepertory,
  addSong,
  editSong,
  deleteSong
} from '../src/controllers/repertorioController.js';

const router = express.Router();

// Define rutas sin el prefijo '/repertorio' aquí, ya que se aplicará en el archivo principal
router.get('/', getAllRepertory);     // Accede a todos los repertorios
router.post('/', addSong);            // Añade una nueva canción
router.put('/:id', editSong);         // Edita una canción existente
router.delete('/:id', deleteSong);    // Elimina una canción

export default router;

