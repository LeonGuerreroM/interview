const pool = require('../lib/connection');

class Services{

    constructor(){
    }

    async get(id){
        const conn = await pool.getConnection();
        //const query = 'SELECT * FROM stations_brands';
        const query = 'SELECT s.name AS Nombre, sc.distance AS Distancia, p.value AS Precio, b.name AS Marca FROM stations s, stations_competitors sc, prices p, brands b, stations_brands sb';
        const rta = await conn.query(query); 
        return rta;
    }

}

module.exports = Services;

