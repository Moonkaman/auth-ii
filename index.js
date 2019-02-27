const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api', authRouter);
server.use('/api/users', usersRouter);

const port = process.env.PORT || 8000;

server.listen(port, _ => console.log(`\n***Server running on port ${port}***\n`));