const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const { getBits } = require('./apiCalls.js');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/bitcoinApi/:start/:end', (req, result) => {
  const start = req.params.start;
  const end = req.params.end;

  getBits(start, end, (err, res) => {
    if (err) {
      console.log('err');
      return;
    }
    return result.send(res.data.bpi);
  });
})


app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});