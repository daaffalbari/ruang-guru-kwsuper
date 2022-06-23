'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('media', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			image: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			create_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			update_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('media');
	},
};
