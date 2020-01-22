var express = require('express');
var router = express.Router();
var uuid = require('uuid/v1');
var formidable = require('formidable')

router.post('/api/registration', (req, res)=>{
    var newUser = {
        firstName: req.body.firstName,
        id: 1,
        image: '',
        middleName: req.body.middleName,
        permission: {
            chat: { C: true, R: true, U: true, D: true },
            news: { C: true, R: true, U: true, D: true },
            settings: { C: true, R: true, U: true, D: true }
        },
        surName: req.body.surName,
        username: req.body.username
    }

    res.json(newUser);
})

router.post('/api/login', (req, res)=>{
   var loginUser = 
    {
        firstName: 'alex',
        id: 1,
        image: '',
        middleName: 'alex',
        permission: {
            chat: { C: true, R: true, U: true, D: true },
            news: { C: true, R: true, U: true, D: true},
            settings: { C: true, R: true, U: true, D: true }
        },
        surName:'alex',
        username: 'alex',
        accessToken: uuid(),
        refreshToken: uuid()
    }
   
    res.json(loginUser)
})

router.get('/api/news', (req, res) => {
    res.json([]);
})

router.post('/api/news', (req, res)=>{
    console.log(req.body);
    console.log(req.headers.authorization)

    var newNews = {
        id: 1,
        created_at: new Date(),
        text: req.body.text,
        title: req.body.title,
        user: {
            firstName: 'alex',
            id: 1,
            image: '',
            middleName: 'alex',
            surName: 'alex',
            username: 'alex'
        }
    }

    res.json([newNews])
})

router.get('/api/users', (req, res)=>{
    res.json([
        {
            firstName: 'alex',
            id: 1,
            image: '',
            middleName: 'alex',
            permission: {
                chat: { C: true, R: true, U: true, D: true },
                news: { C: true, R: true, U: true, D: true },
                settings: { C: true, R: true, U: true, D: true }
            },
            surName: 'alex',
            username: 'alex'
        }
    ])
})

router.patch('/api/users/:id/permission', (req, res)=>{
    console.log(req.body)
})

router.patch('/api/profile', (req, res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files)=>{
        console.log(fields, files);
        res.json({
            firstName: fields.firstName,
            id: 1,
            image: '',
            middleName: fields.middleName,
            permission: {
                chat: { C: true, R: true, U: true, D: true },
                news: { C: true, R: true, U: true, D: true },
                settings: { C: true, R: true, U: true, D: true }
            },
            surName: fields.surName,
            username: fields.username
        })
    })
})

router.get('*', (req, res)=>{
    res.redirect('/');
})

module.exports = router;