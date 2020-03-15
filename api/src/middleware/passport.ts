import passport from 'passport';;
import passportLocal from 'passport-local';
import UserDao from '../daos/User/UserDao';
import { IUser } from '../entities/User';
import logger from '../shared/Logger';

const LocalStrategy = passportLocal.Strategy;
const userDao = new UserDao();

passport.serializeUser((user: IUser, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    userDao.getOne(id as string).then((user) => {
        if (!user) {
            logger.error('Error when selecting user on session deserialize', user)
            return done(user);
        }

        done(null, user)
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email: string, password: string, done) => {
    const user = await userDao.getByEmail(email);
    if (!user) { 
        return done(null, false, {message: "No user found."}); 
    }
    user.ValidatePassword(password, (err: Error, isMatch: boolean) => {
        if (err) { return done(err); }
        if (isMatch) {
            return done(null, user);
        }
        return done(undefined, false, { message: "Invalid Email or Password." })
    });
}));
