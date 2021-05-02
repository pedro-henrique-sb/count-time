// server
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;
const routes = require('./routes.js');

// configuring template engine
nunjucks.configure('src/view', {
  autoescape: true,
  express: app,
});

// static files
app.use(express.static('public'));

// allowing encrypted requests
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', routes.index);
app.get('/create-event', routes.pageCreateEvent);
app.post('/create-event', routes.createEvent);
app.get('/event', routes.pageEvent);
app.get('/events', routes.pageEvents);
app.get('/sucess', routes.pageSucess);
app.get('/delete', routes.deleteEvent);
app.get('/test', routes.pageTest);

app.listen(port);
