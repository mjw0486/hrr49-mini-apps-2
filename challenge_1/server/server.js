const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { getData } = require('../data/dbQueries.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/miniApps/hrr49-mini-apps-2/challenge_1/public'));

app.get('/historyAPI/:keyword', (req, res) => {
  getData(req.params.keyword, (err, result) => {
    if (err) {
      return err;
    }
    res.send(result);
  });
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
});