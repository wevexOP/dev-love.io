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

router.post('/signup', (req, res) => 
{
    console.log(req.body);
    res.end();
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/profile/:id', (req, res) => {
    var id = req.params.id;

    if (id == '1'){
        res.render('profile', {
           
        });
    } else {
        res.render('home');
    }
});

router.get('/chat', (req, res) =>
{
    res.render('chat');
});

router.get('/chat/:id', (req, res) =>
{
    var id = req.params.id;

    console.log(id);

    if (id == 'landing')
    {
        res.render('chat');
    }

    else if (id == 'main')
    {
        res.render('chatmain');
    }
    
    else
    {
        res.render('home');
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;