const express = require('express')
const router = express.Router()
const {
  adminAuth
} = require('../middleware/auth')
const {
  getAllServices,
  addService,
  getService,
  removeService,
  editService
} = require('../controllers/services')


/* /api/services/ */
router.get('/', getAllServices)

/* /api/services/:id */
router.get('/:id', getService)

/* /api/services/add */
router.post('/add', adminAuth, addService)

/* /api/services/remove/:id */
router.post('/remove/:id', adminAuth, removeService)

/* /api/services/edit/:id */
router.put('/edit/:id', adminAuth, editService)

module.exports = router