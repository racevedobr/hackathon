module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'base_teste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
