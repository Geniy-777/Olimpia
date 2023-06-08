const {
  prisma
} = require('../prisma/prisma-client')


/**
 * 
 * @route GET /api/products/
 * @desc Получение всех товаров
 * @access Public
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany()

    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Не удалось получить список товаров!'
    })
  }
}

/**
 * 
 * @route POST /api/products/add
 * @description Добавление товара
 * @access Private
 */
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image
    } = req.body

    if (!name || !description || !price)
      return res.status(400).json({
        message: 'Заполните обязательные поля'
      })

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image
      }
    })

    return res.status(201).json({
      product
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось добавить товар!'
    })
  }
}

/**
 * 
 * @route POST /api/products/remove/:id 
 * @description Удаление товара по :id
 * @access Private
 */
const removeProduct = async (req, res) => {
  try {
    const {
      id
    } = req.body
    await prisma.product.delete({
      where: {
        id
      }
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось удалить товар!'
    })
  }
}

/**
 * 
 * @route PUT /api/products/edit/:id 
 * @description Редактирование товара по :id
 * @access Private
 */
const editProduct = async (req, res) => {
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
      message: 'Не удалось отредактировать данные товара!'
    })
  }
}

/**
 * 
 * @route GET /api/products/:id 
 * @description Получение товара по :id
 * @access Public
 */
const getProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await prisma.product.findUnique({
      where: {
        id
      }
    })

    res.status(200).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось отредактировать данные товара!'
    })
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  removeProduct,
  editProduct,
  getProduct
}