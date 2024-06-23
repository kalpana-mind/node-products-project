const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
//const mongoConnect = require('./util/database').mongoConnect;
//const User = require('./models/user');

const app = express();

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   })
// );
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById(1)
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://kalpanareadwrite:Sd5z6gsdbzGs8rSF@cluster0.zxyvbda.mongodb.net/'
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    connsole.log(err);
  });
