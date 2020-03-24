const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json({
        "evento": "Semana Omnistack 11"
    })
})

module.exports = routes;