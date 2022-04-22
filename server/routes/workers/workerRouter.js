const Router =require('express')
const router=new Router()
const workerController=require('../../controllers/workers/workerController')

router.post('/work/create',workerController.create)
router.post('/work/all',workerController.getAllWorker)
router.get('/work/filter',workerController.getFilterWorker)
router.post('/workerPlace/create',workerController.createPlace)
router.get('/workerPlace/all',workerController.getAllPlace)
router.get('/work/one',workerController.getOne)
router.get('/work/oneById',workerController.getOneById)


module.exports = router