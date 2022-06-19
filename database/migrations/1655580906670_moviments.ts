import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'moviments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('designation')
      table.string('type')
      table.integer('product_id')
      table.integer('client_id')
      // table.integer('product_id').unsigned().references('id').inTable('products').onUpdate('cascade')
      // table.integer('client_id').unsigned().references('rowNumber').inTable('clients').onUpdate('cascade')
      table.decimal('value')
      table.date('date')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
