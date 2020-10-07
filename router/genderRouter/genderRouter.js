const genderRouter = require('express').Router();
const {getAllGenders} = require('../../controllers');

genderRouter.get('/', getAllGenders)

module.exports = genderRouter;