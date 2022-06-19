import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index() {

    const clients = await Client.all()

    return {
      data: clients,
    }
  }

  public async store({ request, response}: HttpContextContract) {
    const body = request.body()

    const client = await Client.create(body)

    response.status(201)

    return {
      message: 'Client created successfully',
      data: client,
    }
  }

  public async show({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)

    // await client.load('moviments')

    const costumerId = client.$getAttribute('customerid')

    const moviments = await Database.from('moviments').select('*').where('client_rownumber', costumerId)

    return {
      data: client, moviments
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const client = await Client.findOrFail(params.id)

    client.surname = body.surname
    client.creditscore = body.creditscore
    client.geography = body.geography
    client.gender = body.gender
    client.dateofbirth = body.dateofbirth
    client.openaccountdate = body.openaccountdate
    client.openaccountnumber = body.openaccountnumber
    client.creditcardaccountnumber = body.creditcardaccountnumber
    client.balance = body.balance
    client.balancedate = body.balancedate
    client.estimetedsalary = body.estimetedsalary
    client.currentbalance = body.currentbalance

    
    await client.save()

    return {
      message: 'Cliente atualizado com sucesso!',
      data: client,
    }
  }

  public async destroy({}: HttpContextContract) {}
}
