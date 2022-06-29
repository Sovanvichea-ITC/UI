const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
// const httpURL = 'https://project-ip-hotel.web.app';
const httpURL = "http://localhost:3000";

app.use(cors({
  origin: httpURL,
  credentials: true
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Connect session
require('./configs/session')(app);

// Connect mongodb
require('./configs/db')();

app.use(require('./routes'));

app.use((err, req, res, next) => {
  return res.json({
    success: false,
    code: 0,
    error: err
  })
})


app.listen(process.env.PORT || 3001, () => console.log('App avaiable on '+ httpURL))

