// imports
const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 5001;

// config needed vars
const root = path.join(__dirname);

// server config
app.use(express.static(root));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root });
});

app.post('/summoner', (req, res) => {
  const summoner = null;
  const body = req.body;
  axios.get("https://api.lol.com/" + body.summoner)
    .then(apiRes => res.json({ 
      response: apiRes.data
     }));

});

// start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
