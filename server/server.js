const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api', (req, res) => {
    res.send('hi')
    // res.render(path.resolve())
})


module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));