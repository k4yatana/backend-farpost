/**
 * Routes for receiving commands
 */


const express = require('express');

module.exports = function (db) {
    const router = exports.router = express.Router();

    router.get('/', async (req, res, next) => {
        try {
            const [results] = await db.query('SELECT CAST(row_number() OVER (ORDER BY length DESC) AS INT) as place, length / 1000 as length, name FROM addr.roads ORDER BY length DESC');
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({
                message: 'Error'
            });
        }
    });

    return router;
}
