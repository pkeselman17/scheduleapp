import cookieParser from 'cookie-parser'
import express, { Request, Response }  from 'express';
import logger from 'morgan';
import passport from 'passport';
import path from 'path';

import './middleware/passport';

//Routes
import BaseRouter from './routes';

// Init express
const app = express();
import cors from 'cors';
import session from 'express-session';
import flash from 'connect-flash';
import bodyParser from 'body-parser';

// Add middleware/settings/routes to express.
app.use(cors());
app.use(session({ secret: process.env.SESSION_SECRET ?? '', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', BaseRouter);

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: viewsDir});
});

// Export express instance
export default app;
