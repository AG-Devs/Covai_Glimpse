const express= require('express')
const mongoose=require('mongoose')
const app = express()
const dotenv=require('dotenv')
const routeUrls=require('./routes/routes.cjs')
const bodyParser = require("body-parser")
const cors=require('cors')

dotenv.config()

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

mongoose.connect(process.env.MONGOOSE_URL)

app.use(cors())
app.use(express.json())

app.use("/app",routeUrls)
app.use("/dashboard",routeUrls)
app.use("/login",routeUrls)
app.use("/getall",routeUrls)

app.use("/new",routeUrls)
app.use("/post",routeUrls)
app.use("/currentPost",routeUrls)
app.use("/change",routeUrls)
app.use("/liked",routeUrls)
app.use("/likedd",routeUrls)
app.use("/disliked",routeUrls)
app.use("/dislikedd",routeUrls)

app.use("/display",routeUrls)

app.use("/single",routeUrls)
app.use("/single2",routeUrls)
app.use("/postsuser",routeUrls)
app.use("/getting",routeUrls)
app.use("/visited",routeUrls)
app.use("/followed",routeUrls)
app.use("/followedd",routeUrls)
app.use("/unfollowed",routeUrls)
app.use("/delete",routeUrls)
app.use("/send",routeUrls)
app.use("/deleting",routeUrls)

app.use("/user",routeUrls)
app.use("/follow",routeUrls)
app.use("/unfollow",routeUrls)

app.use("/edit",routeUrls)

app.listen( process.env.PORT || 3001,()=>{console.log('server is up')})
