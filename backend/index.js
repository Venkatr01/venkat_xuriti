const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index')
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(express.json());


app.use('/',rootRouter);
app.listen(3053);