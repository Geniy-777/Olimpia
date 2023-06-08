const express = require('express')
const router = express.Router()
const {
  adminAuth
} = require('../middleware/auth')
const {
  getAllArticles,
  addArticle,
  getArticle,
  removeArticle,
  editArticle
} = require('../controllers/articles')


/* /api/articles/ */
router.get('/', getAllArticles)

/* /api/articles/:id */
router.get('/:id', getArticle)

/* /api/articles/add */
router.post('/add', adminAuth, addArticle)

/* /api/articles/remove/:id */
router.post('/remove/:id', adminAuth, removeArticle)

/* /api/articles/edit/:id */
router.put('/edit/:id', adminAuth, editArticle)

module.exports = router