import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];
let currentUser;

app.post("/sign-up", (req, res) => {
  currentUser = req.body
  users.push(req.body);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  let tweet = { username : req.body.username,
    avatar: currentUser.avatar,
    tweet: req.body.tweet
  }
  tweets.splice(0, 0, tweet);
  res.send("Ok");
});

app.get("/tweets", (req, res) =>{
  let lastTweets = []
  if(tweets.length < 10){
    for(let tweet of tweets){
      lastTweets.push(tweet)
    }
  }
  else{
    for(let i = 0; i< 10; i++){
      lastTweets.push(tweets[i])
    }
  }

  res.send(lastTweets)
})


app.listen(5000, () => {
  console.log("Rodando em http://localhost:5000");
});
