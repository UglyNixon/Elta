
const Router = require('express')
const router =new Router()
const materialController=require('../../controllers/products/material-controller')

router.get('/get',materialController.get)

module.exports = router