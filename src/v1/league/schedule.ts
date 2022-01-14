import express from 'express';
import { execute } from '../../utilities/database/mysql';
const router = express.Router();

router.get('/', async (req, res) => {
    return res.send({ error: false, msg: 'Success', games: await execute(`SELECT * FROM knockout_schedule`)})
});

export = router;
                                              