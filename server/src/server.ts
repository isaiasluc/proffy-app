import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.body);
    
    const users = [
        { name: 'Isaias', idade: 26, estadocivil: 'Solteiro'},
        { name: 'Brenno', idade: 24, estadocivil: 'Namorando'}
    ];

    return res.json(users);
})

app.listen(3333);