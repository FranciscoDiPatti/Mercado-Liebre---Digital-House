const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.static('public'));



app.listen(3007, ()=>{
    console.log('Servidor funcionando correctamente en puerto ' + PORT );
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});