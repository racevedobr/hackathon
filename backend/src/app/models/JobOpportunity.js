import Sequelize, { Model } from 'sequelize';

class JobOpportunity extends Model {
  static init(sequelize) {
    super.init(
      {
        job_name: Sequelize.STRING,
        techs: Sequelize.STRING,
        type_position: Sequelize.STRING,
        time_work: Sequelize.STRING,
        benefities: Sequelize.STRING,
        salary: Sequelize.STRING,
        canceled: Sequelize.BOOLEAN,
        hired: Sequelize.BOOLEAN,
        open_date: Sequelize.DATE,
        hired_date: Sequelize.DATE,
        closed_date: Sequelize.DATE,
        closed_reason: Sequelize.STRING,
        canceled_reason: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Company, {
      foreignKey: 'company_id',
      as: 'company',
    });
  }
}

export default JobOpportunity;
