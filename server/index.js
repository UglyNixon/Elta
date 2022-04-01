

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db');
const router =require('./routes/index')
const errorMiddleware =require('./middlewares/error-middkeware')
const PORT =process.env.PORT||5000;
const app = express()


app.use(express.json())
app.use(cookieParser())
const corsOptions ={
    origin:process.env.CLIENT_URL,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors((corsOptions)));
app.use('/api',router)
app.use(errorMiddleware)

const start  = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync(
            // {force:true}
        )
       app.listen(PORT,()=>console.log(`server start on PORT ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}
start()
