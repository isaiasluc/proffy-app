import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at') //Ao clicar em entrar em contato, será anotado a hora que o usuário solicitou isso.
            .defaultTo('now()')
            .notNullable();
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('connections');
}