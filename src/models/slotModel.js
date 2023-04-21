const mongooose=require("mongoose");

const slotSchema=new mongooose.Schema({
    Date:{
          type:String,
          required:true
    },
    Start_time:{
        type:String,
        required:true
    },
    End_time:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongooose.model("TimeSlots",slotSchema)