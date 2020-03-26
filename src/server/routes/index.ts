import{ Router } from 'express';
import chirpsRouter from './chirps'

const router = Router();



//linked to index file
 router.use('/chirps', chirpsRouter)

export default router ;