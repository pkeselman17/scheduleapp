import jwt from 'express-jwt';
import 'dotenv'

const getTokenFromHeaders = (req: any) => {
    const { headers: { authorization } } = req;

    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
};

const auth = {
    required: jwt({
        secret: process.env.JWT_SECRET !== undefined ? process.env.JWT_SECRET : '',
        userProperty: 'payload',
        getToken: getTokenFromHeaders
    }),
    optional: jwt({
        secret: process.env.JWT_SECRET !== undefined ? process.env.JWT_SECRET : '',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false
    })
};

export default auth;