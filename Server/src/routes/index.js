const router = require('express').Router();
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const getCharById = require('../controllers/getCharById');

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav:id', deleteFav);

module.export = router;
