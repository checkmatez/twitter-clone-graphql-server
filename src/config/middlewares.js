import bodyParser from 'body-parser'

import { decodeToken } from '../services/auth'

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (token) {
      const user = await decodeToken(token)
      req.user = user
    } else {
      req.user = null
    }
    return next()
  } catch (error) {
    throw error
  }
}

export default app => {
  app.use(bodyParser.json())
  app.use(auth)
}
