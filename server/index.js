const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'})
})

const PORT = PROCESS.ENV.PORT || 5000;
app.listen(PORT)