const express = require('express');
const app = express();

const productRoute = require('./routes/Product.js');
const userRoute = require('./routes/User.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.status(200).send('This app is running well')
});

app.use('/products', productRoute);

app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log(`Server running on http://127.0.0.1:${PORT}`)
});