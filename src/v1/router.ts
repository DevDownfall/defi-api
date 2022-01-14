import express from 'express';
const router = express.Router();

router.use('/league/schedule', require('./league/schedule'));
router.use('/league/teams', require('./league/teams'));

export = router;
