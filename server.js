const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

const app = express();


app.use(bodyParser.json());

// Connecter à MongoDB
mongoose.connect('mongodb://localhost/e-it-school');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
