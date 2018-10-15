const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./server/routes/user');
const employeeRoutes = require('./server/routes/employee');

const db = `mongodb://localhost:27017/company`;

mongoose.Promise = global.Promise;
mongoose
  .connect(db) // eslint-disable-next-line
  .then(() => console.log('DB Connected'))// eslint-disable-next-line
  .catch(err => console.log(err));
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes); // eslint-disable-next-line
app.listen(port, () => console.log(`App running at ${port}`));
