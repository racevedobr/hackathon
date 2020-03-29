import Sequelize from 'sequelize';

import User from '../app/models/User';
import Company from '../app/models/Company';
import JobOpportunity from '../app/models/JobOpportunity';

import databaseConfig from '../config/database';

const models = [User, Company, JobOpportunity];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
