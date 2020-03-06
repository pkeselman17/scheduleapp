import { emptyGUID } from '../shared/constants';

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    passwordSalt: string;
    passwordHash: string;
    userName: string;
    email: string;
    createdDate: Date
}

class User implements IUser {

    public id: string;
    public firstName: string;
    public lastName: string;
    public passwordSalt: string;
    public passwordHash: string;
    public userName: string;
    public email: string;
    public createdDate: Date

    constructor(emailOrUser: string | IUser, id?: string, firstName?: string, lastName?: string, 
        passwordSalt?: string, passwordHash?: string, userName?: string) {
        if (typeof emailOrUser === 'string') {
            this.email = emailOrUser;
            this.id = id || emptyGUID;
            this.firstName = firstName || '',
            this.lastName = lastName || '',
            this.userName = userName || '',
            this.passwordSalt = passwordSalt || '',
            this.passwordHash = passwordHash || ''
        } else {
            this.email = emailOrUser.email;
            this.id = emailOrUser.id;
            this.firstName = emailOrUser.firstName || '',
            this.lastName = emailOrUser.lastName || '',
            this.userName = emailOrUser.userName || '',
            this.passwordSalt = emailOrUser.passwordSalt || '',
            this.passwordHash = emailOrUser.passwordHash || ''
        }

        this.createdDate = new Date();
    }
}

export default User;
