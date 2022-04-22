
const Router = require('express')
const router = new Router()
const ruchkaController=require('../../controllers/products/ruchka-controller')


router.post('/create',ruchkaController.create)
router.get('/getOne',ruchkaController.getOne)




module.exports=router