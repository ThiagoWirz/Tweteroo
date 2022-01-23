import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


let users = []

let tweets = []

app.post("/sign-up", (req, res) =>{
    users.push(req.body);
    console.log(users)
    res.send("Ok");
})

app.listen(5000, () =>{
    console.log("Rodando em http://localhost:5000")
})