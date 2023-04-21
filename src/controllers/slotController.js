const slotModel = require("../models/slotModel")

const timeSlot=async (req,res)=>{
    const data=req.body
    const {Date,Start_time,End_time}=data
    if(!Date) return res.status(400).send({status:false, message:"Date is mandatory , like((DD/MM/YYYY)"})
    if(!Start_time) return res.status(400).send({status:false, message:"Start_time is mandatory , like(HH:MM)"})
    if(!End_time) return res.status(400).send({status:false, message:"End_time is mandatory,  like(HH:MM)"})

    const checkSlot= await slotModel.findOne({Date:Date,Start_time:Start_time,End_time:End_time})
    if(checkSlot) return res.status(400).send({status:false, message:"This slot time is already Exist, please select another Timeslot"})
    
    const saveSlot= await slotModel.create(data)

    return res.status(201).send({status:true, message:"Time_slot Saved", saveSlot})

}

module.exports={timeSlot}