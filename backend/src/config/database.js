module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'help2hire',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
