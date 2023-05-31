const express = require("express")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const server = express()
server.use(bodyparser.json())
server.use(cors());


// connect with DB
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbapplication",
})

// connection with database checking

db.connect(function(error){
    if(error){
        console.log("Error Connecting DB");
    }
    else{
        console.log("Successfully Connected to DB");
    }
})

// post establish
server.listen(8085,function check(error){
    if(error)console.log("Error")
    else console.log("Started")
})


// add a record

server.post("/api/student/add",(req,res)=>{
    let details = {
        Name: req.body.Name,
        DOB:req.body.DOB,
        Marks:req.body.Marks,
    };
    let sql = "INSERT INTO student SET ?";
    db.query(sql,details,(error)=>{
        if(error){
            res.send({status:false,message:"Student created Failed"})
        }
        else{
            res.send({status:true,message:"Student added Success"})
        }
    })
})

// all records
server.get("/api/student",(req,res)=>{
    let sql = "SELECT * FROM student";
    db.query(sql,function(error,result){
if(error){
console.log("Error Connecting to DB")
}
else{
    res.send({status:true,data:result})
}
    })
})



// search a record by id

server.get("/api/student/:id",(req,res)=>{
    var studentId = req.params.id;
    var sql = "SELECT * FROM student WHERE id="+studentId;
    db.query(sql,function(error,result){
        if(error){
            console.log("Student cannot be retrived");
        }
        else{
            res.send({status:true,data:result});
        }
    })
})


// delete a record

server.post("/api/student/delete/:id",(req,res)=>{
    var studentId = req.params.id;
    var sql = "DELETE FROM student WHERE id="+studentId;
    db.query(sql,(error)=>{
        if(error){
            console.log("Record cannot be Deleted")
        }
        else{
            res.send({status:true,message:"Record Deleted Successfully"})
        }
    })
})


// update a record

server.post("/api/student/update/:id",(req,res)=>{
    var studentId = req.params.id;
    var sql = "UPDATE student SET Name='"+
    req.body.Name+"',DOB='"+
    req.body.DOB+"',Marks ='"+
    req.body.Marks+"' WHERE id ="+req.params.id;
    db.query(sql,(error,result)=>{
        if(error)console.log("Error Updating")
        else {res.send({status:true,message:"Record Updated"})}
    })
})

// server.post("/api/student/update/:id",(req,res)=>{
//     var studentId = req.params.id;
//     var sql = "UPDATE student SET Name="+req.body.Name+",DOB="+req.body.DOB+",Marks="+req.body.Marks
//     +"WHERE id="+studentId;
//     db.query(sql,(error)=>{
//         if(error)console.log("Error Updating")
//         else {res.send({status:true,message:"Record Updated"})}
//     })
// })