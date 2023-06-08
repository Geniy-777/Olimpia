const express = require('express')
const router = express.Router()
const {
  adminAuth
} = require('../middleware/auth')
const {
  getAllEmployees,
  addEmployee,
  getEmployee,
  removeEmployee,
  editEmployee
} = require('../controllers/employees')


/* /api/employees/ */
router.get('/', getAllEmployees)

/* /api/employees/:id */
router.get('/:id', getEmployee)

/* /api/employees/add */
router.post('/add', adminAuth, addEmployee)

/* /api/employees/remove/:id */
router.post('/remove/:id', adminAuth, removeEmployee)

/* /api/employees/edit/:id */
router.put('/edit/:id', adminAuth, editEmployee)

module.exports = router