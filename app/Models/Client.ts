import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Moviment from './Moviment'

export default class Client extends BaseModel {

  @hasMany(() => Moviment)
  public moviments: HasMany<typeof Moviment>

  @column({ isPrimary: true })
  public rownumber: number

  @column()
  public customerid: number

  @column()
  public surname: string

  @column()
  public creditscore: number

  @column()
  public geography: string

  @column()
  public gender: string

  @column()
  public dateofbirth: Date

  @column()
  public openaccountdate: Date

  @column()
  public openaccountnumber: Date

  @column()
  public currentaccountnumber: number

  @column()
  public creditcardaccountnumber: string

  @column()
  public balance: number

  @column()
  public balancedate: Date

  @column()
  public estimetedsalary: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  currentbalance: number
}
