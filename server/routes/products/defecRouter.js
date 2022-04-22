
const Router = require('express')
const router =new Router()
const defecController=require('../../controllers/products/defec-controller')

router.post('/create',defecController.create)
router.get('/all',defecController.get)
router.post ('/ruchkaMatDefec',defecController.ruchkaMatDefec)
router.post('/materialBrak',defecController.materialBrak)

module.exports = router