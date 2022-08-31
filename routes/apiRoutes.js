const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (error, data) => {
        if (error) {
            res.status(500).json('500');
            console.log('Error!!!')
        };
        res.json(JSON.parse(data));
    });
});

router.post ('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (error,data) => {
        if (error) {
            res.status(500).json('500');
        };
        let newData = JSON.parse(data)
        newData.push({...req.body, id:uuidv4() });

    })
})

module.exports = router;
