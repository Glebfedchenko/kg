// eslint-disable-next-line
const mongoose = require('mongoose');
const {Emplyoyee} = require('../models/employee');

module.exports = {
  createNewEmployee: async (req, res) => {
    const employee = new Emplyoyee(req.body);
    await employee.save();
    res.status(200).send(employee);
  },
  getAllEmployees: async (req, res) => {
    await Emplyoyee.find()
      .exec()
      .then(docs => {
        if (docs.length > 0) {
          res.status(200).send(docs);
        } else {
          res.status(404).json({
            message: 'There are no employees to show',
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err,
        });
      });
  },
  getEmployeeById: async (req, res) => {
    const {id} = req.params;
    const employee = await Emplyoyee.findById(id);
    res.status(200).send(employee);
  },
  editEmployee: async (req, res) => {
    const {id} = req.params;
    const newEmployee = req.body;
    const updatedEmployee = await Emplyoyee.findOneAndUpdate(id, newEmployee);
    // res.status(200).json(await Emplyoyee.findById(id));
    res.status(200).json(updatedEmployee);
  },
  deleteEmployee: async (req, res) => {
    const {id} = req.params;
    await Emplyoyee.findOneAndRemove(id)
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(500).json({error: err});
      });
  },
};
