'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Columns', {
      columnId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Boards',
          key: 'boardId',
        },
        onDelete: 'CASCADE',
      },
      position: {
        allowNull: false,
        type: Sequelize.ENUM('A', 'B', 'C', 'D', 'E'),
        defaultValue: 'A', // 기본값으로 'A'를 선택
      },
      columnName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Columns');
  },
};
