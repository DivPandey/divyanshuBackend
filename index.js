require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

const githubdata = {
    "login": "DivPandey",
    "id": 152685895,
    "node_id": "U_kgDOCRnNRw",
    "avatar_url": "https://avatars.githubusercontent.com/u/152685895?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DivPandey",
    "html_url": "https://github.com/DivPandey",
    "followers_url": "https://api.github.com/users/DivPandey/followers",
    "following_url": "https://api.github.com/users/DivPandey/following{/other_user}",
    "gists_url": "https://api.github.com/users/DivPandey/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DivPandey/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DivPandey/subscriptions",
    "organizations_url": "https://api.github.com/users/DivPandey/orgs",
    "repos_url": "https://api.github.com/users/DivPandey/repos",
    "events_url": "https://api.github.com/users/DivPandey/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DivPandey/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 35,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-12-02T08:15:47Z",
    "updated_at": "2025-01-13T07:30:01Z"
}

app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/hello",(req,res) => {
    res.send("Hey Divyanshu wassup!!")
})

app.get("/login",(req,res)=>{
    res.send('<h1>Hello Please login to Divyanshu Pandey</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send('<h2>Hello pls start your yt channel</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})