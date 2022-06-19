import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('rowNumber')
      table.integer('customerId')
      table.string('surname')
      table.string('creditScore')
      table.string('geography')
      table.string('gender')
      table.date('dateOfBirth')
      table.date('openAccountDate')
      table.string('currentAccountNumber')
      table.string('creditcardAccountNumber')
      table.integer('balance')
      table.date('balancedate')
      table.decimal('estimetedSalary')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
