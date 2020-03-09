import passport from 'passport';;
import passportLocal from 'passport-local';
import UserDao from '../daos/User/UserDao';

const LocalStrategy = passportLocal.Strategy;
const userDao = new UserDao();

passport.use(new LocalStrategy(
    (email: string, password: string, done) => {
        userDao.getByEmail(email)
            .then((user) => {
                if (!user) { return done(null, false); }
                user.ValidatePassword(password, (err: Error, isMatch: boolean) => {
                    if (err) { return done(err); }
                    if (isMatch) {
                        return done(null, user);
                    }
                    return done(undefined, false, { message: "Invalid Email or Password." })
                });
            });
    }));
