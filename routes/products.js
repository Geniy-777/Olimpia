const express = require('express')
const router = express.Router()
const {
  adminAuth
} = require('../middleware/auth')
const {
  getAllProducts,
  addProduct,
  getProduct,
  removeProduct,
  editProduct
} = require('../controllers/products')


/* /api/products/ */
router.get('/', getAllProducts)

/* /api/products/:id */
router.get('/:id', getProduct)

/* /api/products/add */
router.post('/add', adminAuth, addProduct)

/* /api/products/remove/:id */
router.post('/remove/:id', adminAuth, removeProduct)

/* /api/products/edit/:id */
router.put('/edit/:id', adminAuth, editProduct)

module.exports = router