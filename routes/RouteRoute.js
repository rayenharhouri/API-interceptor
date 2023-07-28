import express from 'express'
import {createRoute,getLocationData} from '../controller/RouteController.js'
import request from 'request'
import https from 'https'

const router = express.Router()

router.post('/createRoute', createRoute)
router.get('/get', getLocationData)





export default router