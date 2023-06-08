const {
  prisma
} = require('../prisma/prisma-client')


/**
 * 
 * @route GET /api/employees/
 * @desc Получение всех сотрудников
 * @access Public
 */
const getAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()

    res.status(200).json(employees)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Не удалось получить список сотрудников!'
    })
  }
}

/**
 * 
 * @route POST /api/employees/add
 * @description Добавление сотрудника
 */
const addEmployee = async (req, res) => {
  try {
    const {
      fistrname,
      lastname,
      age,
      education,
      description
    } = req.body

    if (!fistrname || !lastname || !age || !education || !description){
      console.log(fistrname,lastname,age,education,description);
      return res.status(400).json({
        message: 'Заполните обязательные поля'
      })
    }
      

    const employee = await prisma.employee.create({
      data: {
        fistrname,
        lastname,
        age,
        education,
        description
      }
    })

    return res.status(201).json({
      employee
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось добавить сотрудника!'
    })
  }
}

/**
 * 
 * @route POST /api/employees/remove/:id 
 * @description Удаление сотрудника по :id
 * @access Private
 */
const removeEmployee = async (req, res) => {
  try {
    const {
      id
    } = req.body
    await prisma.employee.delete({
      where: {
        id
      }
    })

    res.status(204).json('OK')
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось удалить сотрудника!'
    })
  }
}

/**
 * 
 * @route PUT /api/employees/edit/:id 
 * @description Редактирование сотрудника по :id
 * @access Private
 */
const editEmployee = async (req, res) => {
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
      message: 'Не удалось отредактировать данные сотрудника!'
    })
  }
}

/**
 * 
 * @route GET /api/employees/:id 
 * @description Получение сотрудника по :id
 * @access Public
 */
const getEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const employee = await prisma.employee.findUnique({
      where: {
        id
      }
    })

    res.status(200).json(employee)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Не удалось отредактировать данные сотрудника!'
    })
  }
}

module.exports = {
  getAllEmployees,
  addEmployee,
  removeEmployee,
  editEmployee,
  getEmployee
}