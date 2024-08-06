const express = require('express');
const Resource = require('../models/Resource');

const router = express.Router();

// Route pour ajouter une ressource
router.post('/', async (req, res) => {
    try {
        const resource = new Resource({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type
        });
        await resource.save();
        res.status(201).send('Resource added');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Route pour voir toutes les ressources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
