import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import User from '../entities/User';
import UserDao from '../daos/User/UserDao';

import auth from './auth';

// Init shared
const router = Router();
const userDao = new UserDao();


/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.post('/', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
  
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    userDao.add(new User(user))

    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }));
  });

router.post('/login', auth.optional(req, res, next) => {
    //finish this
});

export default router;
