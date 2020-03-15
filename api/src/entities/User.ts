import { emptyGUID } from '../shared/constants';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

import logger from '../shared/Logger';

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    userName: string;
    email: string;
    createdDate: Date
    ValidatePassword: (password: string, cb: compareCallback) => Promise<boolean>;
    SetPassword: (password: string, cb: passwordCallback) => Promise<string>;
}

type compareCallback = (err: any, isMatch: boolean) => any;
type passwordCallback = (err: any, res: string) => any;

class User implements IUser {

    public id: string;
    public firstName: string;
    public lastName: string;
    public passwordHash: string;
    public userName: string;
    public email: string;
    public createdDate: Date

    constructor(emailOrUser: string | IUser, id?: string, firstName?: string, lastName?: string,
        passwordHash?: string, userName?: string) {
        if (typeof emailOrUser === 'string') {
            this.email = emailOrUser;
            this.id = id || emptyGUID;
            this.firstName = firstName || '',
                this.lastName = lastName || '',
                this.userName = userName || '',
                this.passwordHash = passwordHash || ''
        } else {
            this.email = emailOrUser.email;
            this.id = emailOrUser.id;
            this.firstName = emailOrUser.firstName || '',
                this.lastName = emailOrUser.lastName || '',
                this.userName = emailOrUser.userName || '',
                this.passwordHash = emailOrUser.passwordHash || ''
        }

        this.createdDate = new Date();
    }

    ValidatePassword(password: string, cb: compareCallback): Promise<boolean> {
       return bcrypt.compare(password, this.passwordHash, (err: Error, isMatch: boolean) => {
           cb(err, isMatch);
       });
    }

    SetPassword(password: string, cb: passwordCallback): Promise<string> {
        return bcrypt.hash(password, 10, (err: Error, res: string) => {
            cb(err, res);
        });
    }

    ToAuthJSON() {
        return {
          id: this.id,
          email: this.email,
          token: this.generateJWT(),
        };
      };

      generateJWT() {
          const today = new Date();
          const expirationDate = new Date(today);
          expirationDate.setDate(today.getDate() + 60);

          return jwt.sign({
              email: this.email,
              id: this.id,
              exp: expirationDate.getTime() / 1000,
          }, process.env.JWT_SECRET !== undefined ? process.env.JWT_SECRET : '');
      }
}

export default User;
