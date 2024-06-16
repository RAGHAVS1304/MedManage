import express from 'express';
const router=express.Router();
router.get('/', (req,res)=>{
    res.send("That works")
})
export default router;