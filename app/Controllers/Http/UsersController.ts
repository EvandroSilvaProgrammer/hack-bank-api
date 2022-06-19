import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {

    const users = await User.all()

    return {
      data: users,
    }
  }

  public async store({ request, response}: HttpContextContract) {
    const body = request.body()

    const user = await User.create(body)

    response.status(201)

    return {
      message: 'User created successfully',
      data: user,
    }
  }

  public async show({}: HttpContextContract) {
    const user = await User.find(1)

    return {
      data: user,
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
