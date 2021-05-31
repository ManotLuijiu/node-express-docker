const express = require('express');
const winston = require('winston');
const favicon = require('serve-favicon');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transport: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
  res.send('<h2>Hi there</h2>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.log({
    level: 'info',
    message: `Listening on port ${port}`,
  });
});
