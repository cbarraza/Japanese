const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
require('./database');

// Settings
app.use(express.json());
app.set('PORT', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.use(routes);

// Start server
app.listen(app.get('PORT'), () => {
  console.log(`Server on port ${app.get('PORT')}`);    
});
