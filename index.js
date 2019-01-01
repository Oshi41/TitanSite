const express = require('express');
const path = require('path');
const register = require('./backend/routers/register');

const app = express();
const port = process.env.PORT || 5001;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.json());

// Handle register
app.post('/api/1.0/reg', register);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});


app.listen(port);

console.log('Server listen on port ' + port);

