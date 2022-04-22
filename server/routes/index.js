
const Router = require('express').Router;
const router = new Router();
const userRouter =require('./userRouter')
const productRouter=require('./productRouter')
const workerRouter=require('./workers/workerRouter')

router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/worker',workerRouter);



module.exports=router