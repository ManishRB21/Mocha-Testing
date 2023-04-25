const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')

router.get('/',userCtrl.userList)

module.exports=router