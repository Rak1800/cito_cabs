const mysql=require("mysql");

const con=mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"",
    database:"timeslot"
});

con.connect((err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("mysql database is connected")
    }
})

module.exports=con