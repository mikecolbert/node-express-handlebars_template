const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.set("view engine", "hbs")
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main'
}));


app.use(express.static('/public'));

// use the environmental variable from the  web host or port 3000
const PORT = process.env.PORT || 3000; 


// set routes
app.get('/', (req, res) => {
    res.render('index');
  });


app.listen(PORT, () => console.log('Server listening on port ' + PORT));