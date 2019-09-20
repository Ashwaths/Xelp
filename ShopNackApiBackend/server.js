var express    = require("express");
var login = require('./Routes/loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/auth', router);
app.listen(4200);

Registration:
url:localhost:4200/auth/register
payload:{
"first_name":"ashwath",
"last_name":"Narayana",
"email":"ashwathssuresh@gmail.com",
"password":"Ashw@th1990"
  }
payload type:raw (Application/json)

Login:
url:localhost:4200/auth/login
payload:{
	"email":"ashwathssuresh@gmail.com",
	"password":"Ashw@th1990"
}
  payload type:raw (Application/json)