const {
  prisma
} = require("../prisma/prisma-client")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


/**
 * 
 * @route POST /api/user/login
 * @desc Авторизация
 * @access Public
 */
const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Пожалуйста, заполните обязательные поля'
      })
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    // Проверка пароля
    const isPasswodCorrect = user && (await bcrypt.compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    if (user && isPasswodCorrect && secret) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        token: jwt.sign({
          id: user.id
        }, secret, {
          expiresIn: '1d'
        })
      })
    } else {
      return res.status(400).json({
        message: 'Неверно введен логин или пароль'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Не удалось авторизоваться!'
    })
  }
}


/**
 * 
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 * 
 */
const register = async (req, res) => {
  try {
    const {
      email,
      password,
      name,
      phone
    } = req.body

    if (!email || !password || !name || !phone) {
      return res.status(400).json({
        message: 'Пожалуйста заполните обязательные поля'
      })
    }

    const isRegisteredUser = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (isRegisteredUser) {
      return res.status(400).json({
        message: 'Пользователь с таким email уже существует'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        phone,
        name,
        image: null, // FIXME
        isAdmin: false
      }
    })

    const secret = process.env.JWT_SECRET;

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        token: jwt.sign({
          id: user.id
        }, secret, {
          expiresIn: '1d'
        })
      })
    } else {
      return res.status(400).json({
        message: 'Не удалось создать пользователя'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Не удалось зарегистрироваться!'
    })
  }
}


/**
 * 
 * @route GET /api/user/current
 * @desc Текущи пользователь
 * @access Private
 * 
 */
const current = async (req, res) => {
  return res.status(200).json(req.user)
}

module.exports = {
  login,
  register,
  current
}