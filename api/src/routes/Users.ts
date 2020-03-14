import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import User from '../entities/User';
import UserDao from '../daos/User/UserDao';

import auth from './auth';

// Init shared
const router = Router();
const userDao = new UserDao();

router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const newUser = new User(user);
  newUser.SetPassword(user.password, (err, hash) => {
    if (err) { throw err; }
    else {
      newUser.passwordHash = hash;
      userDao.add(newUser)
      .then(() => res.json({ user: newUser.ToAuthJSON() }))
    }
  });
});

// router.post('/login', auth.optional(req, res, next) => {

// });

export default router;
