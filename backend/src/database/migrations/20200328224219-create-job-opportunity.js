module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobopps', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: { model: 'companies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      job_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      techs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time_work: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      benefities: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      canceled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      hired: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      open_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      hired_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      closed_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      closed_reason: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      canceled_reason: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('jobopps');
  },
};
