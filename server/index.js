const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require ("cors");

const {mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin:'http://localhost:4200'
}));

//routes
app.use('/api/test',require('./routes/test'));

//start server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});
