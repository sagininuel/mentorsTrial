import express from 'express';
import auth from '../controllers/auth/signUp'

const router = express.Router();

router.post('/api/v1/auth/signUp', auth.signUp);

export default router;