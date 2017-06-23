const express = require('express');
const path = require('path');
// const sqlite = require('sql.js');

// const filebuffer = fs.readFileSync('db/usda-nnd.sqlite3');

// const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// const COLUMNS = [
//   'carbohydrate_g',
//   'protein_g',
//   'fa_sat_g',
//   'fa_mono_g',
//   'fa_poly_g',
//   'kcal',
//   'description'
// ];

app.get('/api/enigma', (req, res) => {
  console.log('Sanity:Sanity:Sanity:');
});


//  ROUTES
app.use('/api', require('./routes/api'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
