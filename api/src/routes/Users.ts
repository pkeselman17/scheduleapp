import { Router } from 'express';

import User from '../entities/User';
import UserDao from '../daos/User/UserDao';

import auth from './auth';
import passport from 'passport';

// Init shared
const router = Router();
const userDao = new UserDao();

router.post('/', auth.optional, (req, res) => {
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

router.post('/login', auth.optional, (req, res, next) => {
  const { body: { email, password } } = req;

  if (!email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      const user = new User(passportUser);
      const token = passportUser.generateJWT();

      res.cookie('jwt', token);

      return res.json({ user: user.ToAuthJSON() });
    }

    return res.status(400);
  })(req, res, next);
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { body: { id } } = req;

  return userDao.getOne(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: new User(user).ToAuthJSON() });
    });
});

router.get('/logout', auth.required, (req, res) => {
  const { } = req;

  req.logout();
  req.session?.destroy((err) => {
    res.json({ body: 'logged out!' });
  })
})

export default router;
