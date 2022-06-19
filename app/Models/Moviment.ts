import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Moviment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public designation: string

  @column()
  public type: string

  @column()
  public product_id: number

  @column()
  public clientRownumber: number

  @column()
  public value: number

  @column()
  public date: Date
}
