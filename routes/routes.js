const express = require('express');
const router = express.Router();
const Services = require('../services/services');
const services = new Services();


router.get('/',
    async (req, res) => {
        try{
            const result = await services.get();
            res.status(200).json(result);
        }catch(error){
            console.log('there was some error');
        }
    }
);

module.exports = router;