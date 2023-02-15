const pool = require('../lib/connection');

class EnrollmentServices{

    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err))
    }

    async get(){
        const query = 'SELECT * FROM tasks';
        const rta = await this.pool.query(query);  
        return rta.rows;
    }

}

module.exports = EnrollmentServices;

