const {
  prisma
} = require('../prisma/prisma-client')


/**
 * 
 * @route GET /api/articles/
 * @desc Получение всех статей
 * @access Public
 */
const getAllArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany()

    res.status(200).json(articles)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Не удалось получить список статей!'
    })
  }
}

/**
 * 
 * @route POST /api/articles/add
 * @description Добавление статьи
 * @access Private
 */
const addArticle = async (req, res) => {
  try {
    const {
      title,
      link
    } = req.body

    if (!title || !link)
      return res.status(400).json({
        message: 'Заполните обязательные поля'
      })

    const article = await prisma.article.create({
      data: {
        title,
        link
      }
    })

    return res.status(201).json({
      article
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось добавить статью!'
    })
  }
}

/**
 * 
 * @route POST /api/articles/remove/:id 
 * @description Удаление статьи по :id
 * @access Private
 */
const removeArticle = async (req, res) => {
  try {
    const {
      id
    } = req.body
    await prisma.article.delete({
      where: {
        id
      }
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось удалить статью по id!'
    })
  }
}

/**
 * 
 * @route PUT /api/articles/edit/:id 
 * @description Редактирование статьи по :id
 * @access Private
 */
const editArticle = async (req, res) => {
  try {
    const data = req.body
    const id = data.id

    await prisma.product.update({
      where: {
        id
      },
      data
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось отредактировать данные статьи!'
    })
  }
}

/**
 * 
 * @route GET /api/articles/:id 
 * @description Получение статьи по :id
 * @access Public
 */
const getArticle = async (req, res) => {
  try {
    const { id } = req.params

    const article = await prisma.article.findUnique({
      where: {
        id
      }
    })

    res.status(200).json(article)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось отредактировать данные статьи!'
    })
  }
}

module.exports = {
  getAllArticles,
  addArticle,
  removeArticle,
  editArticle,
  getAllArticles
}