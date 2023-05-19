const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { SEED_EVENTS, createEvent } = require("./events");
const PORT = 4096;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/events', function (req, res) {
  res.json(SEED_EVENTS);
});

app.get('/events/:id', function (req, res) {
  res.json(SEED_EVENTS.find(accomplishment => accomplishment.id === parseInt(req.params.id, 10)));
});

app.post('/events', function (req, res) {
  const accomplishment = createEvent(req.body);
  SEED_EVENTS.push(accomplishment);

  res.json(accomplishment);
});

app.put('/events/:id', function (req, res) {
  if (req.body.id) {
    return res.sendStatus(400);
  }

  const i = SEED_EVENTS.findIndex(accomplishment => accomplishment.id === parseInt(req.params.id, 10));

  SEED_EVENTS[i] = {
    ...SEED_EVENTS[i],
    ...req.body,
  };

  res.json(SEED_EVENTS[i]);
});

app.delete('/events/:id', function (req, res) {
  const i = SEED_EVENTS.findIndex(accomplishment => accomplishment.id === parseInt(req.params.id, 10));
  
  if (i === -1) {
    return res.sendStatus(404);
  }

  SEED_EVENTS.splice(i, 1);
  res.sendStatus(204);
});

console.log("[express] Listening on port:", PORT);
app.listen(PORT);
