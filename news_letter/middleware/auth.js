const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require("config");
const User = require("../models/User");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get("secret");

module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {

        const {
            id
        } = jwt_payload.user;

        const user = await User.findById({
            _id: id
        }).select('-password');
        try {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (err) {
            console.error(err.message);
        }
    }));
}