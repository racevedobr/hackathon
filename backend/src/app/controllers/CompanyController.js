import * as Yup from 'yup';
import Company from '../models/Company';

class CompanyController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      cellphone: Yup.string().required(),
      cep: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const companyExists = await Company.findOne({
      where: { email: req.body.email },
    });
    if (companyExists) {
      return res.status(400).json({ error: 'Company already exists' });
    }

    const {
      id,
      name,
      cnpj,
      cellphone,
      email,
      cep,
      street,
      number,
      district,
      city,
      uf,
      company,
    } = await Company.create(req.body);

    return res.json({
      id,
      name,
      cnpj,
      cellphone,
      email,
      cep,
      street,
      number,
      district,
      city,
      uf,
      company,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const company = await Company.findByPk(req.userId);

    if (email && email !== company.email) {
      const companyExists = await Company.findOne({
        where: { email },
      });
      if (companyExists) {
        return res.status(400).json({ error: 'Company already exists' });
      }
    }

    if (oldPassword && !(await company.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does no match' });
    }

    const { id, name, provider } = await company.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new CompanyController();
