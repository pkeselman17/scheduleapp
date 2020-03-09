import { emptyGUID } from '../shared/constants';
import bcrypt from 'bcrypt';
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
}

type compareCallback = (err: any, isMatch: boolean) => any;

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
}

export default User;
