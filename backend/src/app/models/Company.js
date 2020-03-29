import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        cellphone: Sequelize.STRING,
        cep: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        company: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async company => {
      if (company.password) {
        company.password_hash = await bcrypt.hash(company.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Company;
