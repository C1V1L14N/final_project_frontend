const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/business/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

app.listen(8081, () => console.log('API is running on http://localhost:8081/business/login'));