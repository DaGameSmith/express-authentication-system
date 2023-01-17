import passport from 'passport';
import { findUserByEmail } from './services/user';
import { Strategy, ExtractJwt } from "passport-jwt";
const JWTStrategy   = Strategy;
const ExtractJWT = ExtractJwt;

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    async(jwtPayload, cb) => {
        try {
            const user = await findUserByEmail(jwtPayload.email);
            
            return cb(null, user.id);
        }
        catch(err) {
            return cb(err);
        }
    }
));