const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const helmet = require('helmet');
const app = express();
const PORT = 3000;
const route = require('./controllers/route');

app.use(cors({}))

app.use(helmet.xXssProtection());
app.use(cookieparser());
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views')); // Use EJS for admin
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: 'Vanessa24051762Clyde',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      // secure: true, // Enable this in production with HTTPS
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,

  }));

  app.use(route);



  app.listen(PORT, ()=>{
    console.log(`App Listening on PORT ${PORT}`)
  })