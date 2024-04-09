const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// GET /results
app.get('/results', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid parameters' });
    }
    const result = n1 + n2;
    res.json({ result });
});

// POST /results
app.post('/results', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = n1 * n2;
    res.json({ result });
});

// PUT /results
app.put('/results', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = n1 / n2;
    res.json({ result });
});

// PATCH /results
app.patch('/results', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const result = Math.pow(n1, n2);
    res.json({ result });
});

// DELETE /results
app.delete('/results', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid parameters' });
    }
    const result = n1 - n2;
    res.json({ result });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
