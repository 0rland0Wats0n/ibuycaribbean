var keystone = require('keystone');
var cookie = require('cookie');

var Cart = keystone.list('Cart').model;

exports.getCartCount = function(req, res, next) {
    var cookies = cookie.parse(req.headers.cookie || '');

    // get user id
    // TODO: Fix search buy user id
    if(req.user) {
        user_id = req.user.id;
    } else {
        user_id = 0;
    }

    Cart.findOne()
        .where({ session: cookie.ctck })
        .exec(function(err, cart) {
            if(err) {
                throw new Error(err);
            }

            if(!cart) {
                res.locals.cart_count = {
                    quantity: 0,
                    total: "$0.00",
                };
                return next();
            }

            res.locals.cart_count = {
                quantity: cart.quantity,
                total: cart.total
            };
            next();
        });
}
