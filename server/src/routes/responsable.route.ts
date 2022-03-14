import express from 'express';
import { signin } from '@controllers/responsable.controller';

const router = express.Router();

router.post('/login', signin);

export { router };
