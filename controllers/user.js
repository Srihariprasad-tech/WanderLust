const User=require("../models/user");
const passport = require("passport");

module.exports.renderSignupForm=(req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup=async (req, res,next) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({
            email,
            username
        });
        const registeredUser = await User.register(newUser, password);
        console.log("REGISTERED USER:", registeredUser);
  req.login(registeredUser,(err)=>
{
    if(err)
    {
        return next(err);
    }
  req.flash("success", "User registered successfully!");
        res.redirect("/listings");
})  
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};


module.exports.renderLoginForm=(req,res)=>
{
    res.render("users/login.ejs");
};


module.exports.login=(req, res, next) => {
    passport.authenticate("local", (err, user, info) => {

        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash("error", "Invalid Username or Password");
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
        const redirectUrl = res.locals.redirectUrl || "/listings";
return res.redirect(redirectUrl);
        });
    })(req, res, next);
};


module.exports.logout=(req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings");
    });
}