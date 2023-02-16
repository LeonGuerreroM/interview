const express = require('express');
const router = express.Router();
const Services = require('../services/services');
const services = new Services();


router.get('/',
    async (req, res) => {
        try{
            const { id } = req.params;
            const result = await services.get(id);
            console.log('hey');
            console.log(result);
            res.status(200).json(result);
        }catch(error){
            console.log('there was some error');
        }
    }
);

module.exports = router;