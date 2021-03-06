import { Router } from  'express';
 import ChirpStore from '../utils/chirpstore'

const router = Router();

  
 //GET /api/chirps 
router.get('/',(req,res) => {
    const data = ChirpStore.GetChirps();
    const chirps = Object.keys(data).map( key =>{
        return{
            id:key,
            username: data[key].username,
            message: data[key].message
        }
    })
    chirps.pop()
    res.json(chirps);
 });

 //GET /api/chirps/:chirpsid
 router.get('/:chirpid', (req,res) => {
     const chirpid = req.params.chirpid;
     const chirp = ChirpStore.GetChirp(chirpid)
     res.json({id: chirpid, ...chirp });
 });

 //Post /api/chirps
router.post('/', (req,res)=> {
    const chirp = req.body;
    // {username: bob, message:'i build stuff'}
    ChirpStore.CreateChirp(chirp);
    res.status(201).json('New Chirp has Entered The world')
});
//PUT /api/chirps/:chirpid
router.put('/:chirpid', (req, res)=> {
    const chirpid = req.params.chirpid
    const chirp = req.body
    ChirpStore.UpdateChirp(chirpid, chirp)
    res.status(200).json(`Chirp ${chirpid} Updated`);
})
//DELETE  /api/chirps/:chirpid
router.delete('/:chirpid', (req,res) => {
    const chirpid = req.params.chirpid;
    ChirpStore.DeleteChirp(chirpid)
    res.status(200).json(`Chirp ${chirpid} Deleted`)
})
 export default router;