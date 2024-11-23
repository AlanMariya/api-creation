const express = require("express")

const std = new express()
std.use(express.json())

const student = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
];
std.get("/students", (req, res) => {
    res.send(student)})

    std.post("/add",(req,res)=>{
        console.log(req.body)
        student.push(req.body)
        res.send("added data")
    })

    std.listen(5145,()=>{
        console.log("server is running on port 5145")
    })
