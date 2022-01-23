import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


let users = []

let tweets = []

app.post("/sign-up", (req, res) =>{
    users.push(req.body);
    res.send("Ok");
})

app.post("/tweets", (req, res) =>{
    tweets.push(req.body);
    res.send("Ok");
})

app.listen(5000, () =>{
    console.log("Rodando em http://localhost:5000")
})