require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "lakshya2601",
  id: 89459982,
  node_id: "MDQ6VXNlcjg5NDU5OTgy",
  avatar_url: "https://avatars.githubusercontent.com/u/89459982?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/lakshya2601",
  html_url: "https://github.com/lakshya2601",
  followers_url: "https://api.github.com/users/lakshya2601/followers",
  following_url:
    "https://api.github.com/users/lakshya2601/following{/other_user}",
  gists_url: "https://api.github.com/users/lakshya2601/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/lakshya2601/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/lakshya2601/subscriptions",
  organizations_url: "https://api.github.com/users/lakshya2601/orgs",
  repos_url: "https://api.github.com/users/lakshya2601/repos",
  events_url: "https://api.github.com/users/lakshya2601/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/lakshya2601/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Lakshya Porwal",
  company: null,
  blog: "https://lakshyaporwal-porfolio.netlify.app/",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 3,
  created_at: "2021-08-24T12:06:00Z",
  updated_at: "2024-12-28T17:07:49Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// slash is important in routing

app.get("/twitter", (req, res) => {
  res.send("lakshya_2601");
});

// have to restart server at every code updation
app.get("/login", (req, res) => {
  res.send("<h1>Lakshya Porwal Backend learning project</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Here is the new URL</h2>");
});

app.get("/newPort", (req, res) => {
  res.send("<h3>Lakshya's new port here</h3>");
});

app.get("/newport2", (req, res) => {
  res.send("hello new port");
});

app.get("/github", (req, res) => {
  res.jsonp(githubData.name);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
