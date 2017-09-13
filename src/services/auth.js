import jwt from 'jsonwebtoken'

import constants from '../config/constants'
import User from '../models/User'

export const requireAuth = async user => {
  console.log(user)
  if (!user || !user._id) {
    throw new Error('Unauthorized!')
  }
  const me = await User.findById(user._id)
  if (!me) {
    throw new Error('Unauthorized!')
  }
  return me
}

export const decodeToken = token => {
  const arr = token.split(' ')
  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET)
  }

  throw new Error('Invalid token!')
}
