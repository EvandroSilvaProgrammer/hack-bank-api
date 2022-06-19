import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public surname: string

  // @column()
  // public creditscore : number

  // @column()
  // public geography: string

  // @column()
  // public gender: string

  // @column()
  // public dateofbirth: Date

  // @column()
  // public openaccountdate: Date

  // @column()
  // public currentaccountnumber: string

  // @column()
  // public creditcardaccountnumber: string

  // @column()
  // public balance: number

  // @column()
  // public balancedate: Date

  // @column()
  // public estimetedsalary: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
