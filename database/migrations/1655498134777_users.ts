import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('surname')
      // table.string('creditscore')
      // table.string('geography')
      // table.string('gender')
      // table.date('dateofbirth')
      // table.date('openaccountdate')
      // table.string('currentaccountnumber')
      // table.integer('creditcardaccountnumber')
      // table.integer('balance')
      // table.date('balancedate')
      // table.decimal('estimetedsalary')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
