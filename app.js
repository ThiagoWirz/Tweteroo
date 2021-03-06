import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
  if (
    !req.body.username ||
    !req.body.avatar 
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else if (users.find((u) => u.username === req.body.username)) {
    res.status(400).send("Usuário já existe");
  } else {
    users.push(req.body);
    res.status(201).send("Ok");
  }
});

app.post("/tweets", (req, res) => {
  const tweetUser = req.header("User");
  if (
    !tweetUser ||
    !req.body.tweet
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    let tweetAvatar = users.find((u) => u.username === tweetUser).avatar;
    let tweet = {
      username: tweetUser,
      avatar: tweetAvatar,
      tweet: req.body.tweet,
    };
    tweets.splice(0, 0, tweet);
    res.status(201).send("Ok");
  }
});

app.get("/tweets", (req, res) => {
  const page = parseInt(req.query.page);
  if (page === 1) {
    res.send(tweets.slice(0, 10));
  } else {
    res.send(tweets.slice((page - 1) * 10, page * 10));
  }
});

app.get("/tweets/:USERNAME", (req, res) => {
  res.send(
    tweets.filter((userTweets) => userTweets.username === req.params.USERNAME)
  );
});

app.listen(5000);
