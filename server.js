const express = require('express');
const app = express();
const PORT = 3030;


app.get('/', (req,res) => {
    res.sendFile(__dirname+'/views/home.html')
});

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})