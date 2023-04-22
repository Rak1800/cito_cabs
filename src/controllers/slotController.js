const con = require("../config")
const timeSlot = (req, res) => {
    try {
        const data = req.body
        const {id, Date, Start_time, End_time } = data
        if (!id) return res.status(400).send({ status: false, message: "please provide a unique number Id like(1)" })
        if (!Date) return res.status(400).send({ status: false, message: "Date is mandatory , like((YYYY/MM/DD)" })
        if (!Start_time) return res.status(400).send({ status: false, message: "Start_time is mandatory , like(HH:MM)" })
        if (!End_time) return res.status(400).send({ status: false, message: "End_time is mandatory,  like(HH:MM)" })

        con.query("SELECT * FROM slot WHERE Date=? and Start_time=? and End_time=? ", [Date, Start_time, End_time],
            function (err, rows) {
                if (err) {
                    console.log("err")
                }
                if (!rows.length) {
                    con.query("INSERT INTO slot Set ?", data, (error, result, fields) => {
                        if (error) return res.status(400).send({ status: false, message: "please change your id || In between time slot is booked, so please choise another time slot" })
                        return res.status(201).send({ status: true, message: "Time_slot SaveData", data })
                    })
                } else {
                    console.log("already exist")
                    return res.status(400).send({ status: false, message: "This slot time is already Exist, please select another Timeslot" })
                }
            })


    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { timeSlot }