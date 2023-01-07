const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/profile/:id', (req, res) => {
    var id = req.params.id;

    if (id == '1'){
        res.render('profile', {
           
        });
    } else {

    }
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;