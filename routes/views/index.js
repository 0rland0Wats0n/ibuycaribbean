var keystone = require('keystone');
var productHelper = require('../../lib/helpers/product');

var Banner = keystone.list('Banner');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'home';

    // get banner
    view.on('init', function(next) {
        Banner.model.findOne()
            .where({ $or: [{ $and: [{ display: true }, { state: 'active' }] }, { isDefault: true }] })
            .exec(function(err, banner) {
                if(err) {
                    throw new Error(err);
                }

                locals.banner = banner;
                next();
            });
    });

    // get recent products
    view.on('init', function(next) {
        productHelper.getRecent(5, function(products) {
            locals.recent_products = products;
            next();
        });
    });

    // Render the view
    view.render('index');
};
