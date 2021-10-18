const { Pool } = require('pg');
const URI = 'psql --host=scratch-db.cvmmondruc9o.us-east-2.rds.amazonaws.com --port=5432 --username=wonderpus --password --dbname=postgres';
// test if we need to submit pw when submitting queries/getting data


const pool = new Pool({
    connectionString: URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('Executing query: ', text);
        return pool.query(text, params, callback)
    }
};