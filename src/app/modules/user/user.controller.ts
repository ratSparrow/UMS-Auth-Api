import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const { user } = req.body
  const result = await UserService.createUser(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  })
})
export const UserController = {
  createUser,
}
