const mongoose = require('mongoose');

const {Schema} = mongoose;
const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: false,
  },
  position: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Emplyoyee = mongoose.model('employee', EmployeeSchema);

module.exports = {Emplyoyee};
