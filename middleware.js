const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {

        req.session.redirectUrl = req.originalUrl;

        req.flash(
            "error",
            "You must be logged in or signup first!"
        );

        return res.redirect("/login");
    }

    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {

    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }

    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {

    let { id, reviewId } = req.params;

    let review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect(`/listings/${id}`);
    }

    if (!review.author.equals(req.user._id)) {

        req.flash(
            "error",
            "You are not the author of this review!"
        );

        return res.redirect(`/listings/${id}`);
    }

    next();
};