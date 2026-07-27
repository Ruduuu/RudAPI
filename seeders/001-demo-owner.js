'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        // no id here
        name: 'Rud Owner',
        email: 'owner@rudapi.dev',
        password: await bcrypt.hash('owner123', 10),
        role: 'owner',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { email: 'owner@rudapi.dev' }, {});
  }
};
