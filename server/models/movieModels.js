const { Pool } = require('pg');

const pool = new Pool({
  user: 'wonderpus',
  host: 'scratch-db.cvmmondruc9o.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'photogenicus',
  port: 5432,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('Executing query: ', text);
        return pool.query(text, params, callback)
    }
};