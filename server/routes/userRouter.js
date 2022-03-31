

const Router = require('express')
const router = new Router()
const userController =require('../controllers/user-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const checkRole = require('../middlewares/checkRole-middleware')
const {body} =require('express-validator')

router.post('/registration',
    body('email').isEmail(),
    body('password').isByteLength({min:3,max:12})
    ,userController.registration)
router.post('/login',userController.login)
router.post('/logout',userController.logout)
router.get('/activate/:link',userController.activate)
router.get('/refresh',userController.refresh)
router.get('/users',authMiddleware,checkRole("ADMIN"),userController.getUsers)



module.exports=router
