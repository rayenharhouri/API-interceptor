import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const {model} = mongoose

const RouteSchema = new mongoose.Schema({ 
    origine: { type: String, required: false },
    distination: { type: String, required: false },
    timestamp: {  type : Date, default: Date.now },
    price : { type: String, required: false }  
 })

 export default model('Route', RouteSchema)