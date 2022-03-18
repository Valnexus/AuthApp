const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());  

app.use('/auth', (req, res) => {
    const bodyData = req.body;
    if(bodyData.username === 'Alex' && bodyData.password === '123456') {
        res.send({
            status: true,
            token: '34fas$kl2n3#as63d7$as745f653s13f'
        });
    } else {
        res.send({
            status: false
        });
    };    
});
app.listen(port, () => console.log(`API is running on http://localhost:${port}/auth`));