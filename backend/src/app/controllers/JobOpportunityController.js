import * as Yup from 'yup';
import JobOpportunity from '../models/JobOpportunity';

class JobOpportunityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      company_id: Yup.number().required(),
      job_name: Yup.string().required(),
      techs: Yup.string().required(),
      type_position: Yup.string().required(),
      time_work: Yup.string().required(),
      benefities: Yup.string().required(),
      salary: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      company_id,
      job_name,
      techs,
      type_position,
      time_work,
      benefities,
      salary,
      canceled,
      hired,
      open_date,
      hired_date,
      closed_date,
      closed_reason,
      canceled_reason,
      created_at,
      updated_at,
      canceled_at,
    } = await JobOpportunity.create(req.body);

    return res.json({
      id,
      company_id,
      job_name,
      techs,
      type_position,
      time_work,
      benefities,
      salary,
      canceled,
      hired,
      open_date,
      hired_date,
      closed_date,
      closed_reason,
      canceled_reason,
      created_at,
      updated_at,
      canceled_at,
    });
  }

  //   async update(req, res) {}
}

export default new JobOpportunityController();
