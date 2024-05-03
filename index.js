const express = require('express')
const app = express()
const bodyparser = require('body-parser')
require('dotenv').config();
const router=  require('./src/routes/route.js')
const session = require('express-session')
const path = require('path')
const cookie=require('cookie-parser')
app.set('view engine','ejs')
app.use(express.json())
app.use("/static",express.static('public'))
app.use("/static",express.static("upload"))
app.use(bodyparser.urlencoded({extended:true}))
app.use(
    session({
       
        secret:'iamdevagooddev',
        resave:false,
        saveUninitialized:false,
        cookie:{
              maxAge:2000000000
        }
    })
 )
 





app.use('/',router)
app.listen(process.env.PORT || 4783,()=>{
    console.log('★★★★★★ 9999 ★★★★★★')
})