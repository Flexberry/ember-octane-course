/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const jsonServer = require('json-server');
// eslint-disable-next-line no-undef
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router('./tests/test-data/db.json');
const middlewares = jsonServer.defaults();
const secretKey = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';

const generateAccessToken = (userData) => {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(userData, secretKey, { expiresIn: '1800s' });
}

const getErrors = (errorsToSend) => {
  let errors = [];
  if (errorsToSend && Array.isArray(errorsToSend)) {
    errors = [...errorsToSend];
  }

  return {
    errors
  };
};

const getError = (title, detail, status, pathToAttribute) => {
  let errors = [];
  errors.push({
    title,
    detail,
    status,
    source: pathToAttribute ? { pointer: pathToAttribute } : null
  });

  return getErrors(errors);
};

const getUnauthorizedError = () => getError('Login', 'You are not authorized, please log in', 401, null);
const getForbiddenError = () => getError('Forbidden', 'You don\'t have permissions to this resource', 403, null);

const getBaseRoute = (req) => {
  const path = req.path.split('/');
  return path.length > 1 ? path[1] : '/';
};

const isAuthorized = (req) => {
  const baseRoute = getBaseRoute(req);
  if (req.path === '/users' || req.path === '/token' || ((baseRoute === 'authors' || baseRoute === 'books' || baseRoute === 'reviews') && req.method === 'GET')) {
    return 200;
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return 401;
  }

  try {
    let user = jwt.verify(token, secretKey);
    req.app.set('sessionUser', user);
    return 200;
  }
  catch(e) {
    return 403;
  }
};

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/token', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  if (email === 'admin@admin.com' && password === '123') {
    const token = generateAccessToken({ email: req.body.email, username: 'admin' });
    res.json({ token });
  }
  else {
    res.status(401).json(getError('Login', 'Error logging in user with that e-mail and password', 401, null));
  }
});

// Check authorization
server.use((req, res, next) => {
  const authorizeCode = isAuthorized(req);
  if (authorizeCode === 200 ) {
    next() // continue to JSON Server router
  }
  else if (authorizeCode === 401) {
    res.status(401).json(getUnauthorizedError());
  }
  else if (authorizeCode === 403) {
    res.status(403).json(getForbiddenError());
  }
  else {
    res.status(403).json(getForbiddenError());
  }
 });

// Get current user
server.use((req, res, next) => {
  if (req.path === '/users/me' && req.method === 'GET') {
    let storedUser = req.app.get('sessionUser');
    let user = storedUser ? { ...storedUser } : {};
    user.id = 1;
    user.username = 'admin';
    res.json(user);
  }
  else {
    next();
  }
});

// Disable get, modify or delete users
server.use((req, res, next) => {
  if (getBaseRoute(req) === 'users' && (req.method === 'GET' || req.method === 'PATCH' || req.method === 'DELETE')) {
    res.sendStatus(404);
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

// Validate user to add
server.use((req, res, next) => {
  const valid = !req.body || req.body && req.body.username !== 'admin';
  if (getBaseRoute(req) === 'users' && req.method === 'POST' && !valid) {
    res.status(422).json(getError('Username', 'username is already taken', 422, '/data/attributes/username'));
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

// Use default router
server.use(router);

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
});
