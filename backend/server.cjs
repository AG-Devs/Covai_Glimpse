const express= require('express')
const mongoose=require('mongoose')
const app = express()
const dotenv=require('dotenv')
const routeUrls=require('./routes/routes.cjs')
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL)

app.use(cors())
app.use(express.json())
app.use("/app",routeUrls)
app.use("/dashboard",routeUrls)
app.listen( process.env.PORT || 3001,()=>{console.log('server is up')})
