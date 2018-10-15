const express = require('express');

const router = express.Router();
const employeeCtrl = require('../controllers/employee');

router
  .route('/')
  .post(employeeCtrl.createNewEmployee)
  .get(employeeCtrl.getAllEmployees)
  .delete(employeeCtrl.deleteEmployee);

router
  .route('/:id')
  .put(employeeCtrl.editEmployee)
  .get(employeeCtrl.getEmployeeById);

module.exports = router;
