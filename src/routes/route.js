const { timeSlot } = require("../controllers/slotController")

const router=require("express").Router()

router.post("/newslot", timeSlot) 

module.exports=router