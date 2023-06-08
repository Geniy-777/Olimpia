const {
  prisma
} = require('../prisma/prisma-client')


/**
 * 
 * @route GET /api/services/
 * @desc Получение списка услуг
 * @access Public
 */
const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany()

    res.status(200).json(services)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Не удалось получить список услуг!'
    })
  }
}

/**
 * 
 * @route POST /api/services/add
 * @description Добавление услуги
 * @access Private
 */
const addService = async (req, res) => {
  try {
    const {
      name,
      description
    } = req.body

    if (!name || !description)
      return res.status(400).json({
        message: 'Заполните обязательные поля'
      })

    const service = await prisma.service.create({
      data: {
        name,
        description
      }
    })

    return res.status(201).json({
      service
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось добавить услугу!'
    })
  }
}

/**
 * 
 * @route POST /api/services/remove/:id 
 * @description Удаление услуги по :id
 * @access Private
 */
const removeService = async (req, res) => {
  try {
    const {
      id
    } = req.body
    await prisma.service.delete({
      where: {
        id
      }
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось удалить услугу!'
    })
  }
}

/**
 * 
 * @route PUT /api/services/edit/:id 
 * @description Редактирование услуги по :id
 * @access Private
 */
const editService = async (req, res) => {
  try {
    const data = req.body
    const id = data.id

    await prisma.employee.update({
      where: {
        id
      },
      data
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось отредактировать данные услуги!'
    })
  }
}

/**
 * 
 * @route GET /api/services/:id 
 * @description Получение услуги по :id
 * @access Public
 */
const getService = async (req, res) => {
  try {
    const { id } = req.params

    const service = await prisma.service.findUnique({
      where: {
        id
      }
    })

    res.status(200).json(service)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'не удалось полчить услугу по id!'
    })
  }
}

module.exports = {
  getAllServices,
  addService,
  removeService,
  editService,
  getService
}