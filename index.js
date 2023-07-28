import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import http from 'http'
import routeRouter from './routes/RouteRoute.js'
import testRouter, { runTest } from './routes/TestRoute.js'
import cron from 'node-cron'
import { Route } from './controller/constant.js'
import { getLocationData } from '../controller/RouteController.js'
import { get } from 'request'

const app = express()
dotenv.config()

const mongo_uri = process.env.MONGO_URI || `mongodb://127.0.0.1:27017`;
const port = process.env.PORT || 9090
const dbName = process.env.DB_NAME

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose.connect(`${mongo_uri}/${dbName}`)
   .then(() => {
      console.log(`Connected to ${dbName}`)
   })
    .catch(err => {
      console.log(`Error connecting to ${dbName} error : ${err.message}`) 
    })

app.use(morgan('dev'))
app.use(express.json())
app.use("/route", routeRouter)
app.use("/test",testRouter)


//#######################  CRON JOB APPIUM  #############################
// cron.schedule('34 12 * * *', async () => {
//     await runTest()
//     await new Promise(resolve => setTimeout(resolve, 60000));
//     console.log(Route);
//     console.log("Route");
// })

//#######################  CRON JOB INTERCEPTOR  #############################
const min = 15;
const max = 20;
const interval = Math.floor(Math.random() * (max - min + 1)) + min;
cron.schedule(`*/${interval} 6-23 * * *`, async () => {
  getLocationData();
});


const httpServer = http.createServer(app)
httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`)
    if (process.pid) {
        console.log('This process is your pid ' + process.pid);
      }
})


