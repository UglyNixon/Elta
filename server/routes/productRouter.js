

const Router = require('express')
const ruchkaRouter = require("./products/ruchkaRouter");
const defecRouter=require('./products/defecRouter')
const matRouter =require('./products/materialRouter')
const router = new Router()


router.use('/ruchka',ruchkaRouter)
router.use('/defec',defecRouter)
router.use('/material',matRouter)



module.exports=router
