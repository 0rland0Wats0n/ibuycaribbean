var keystone = require('keystone');

var ProductCategory = keystone.list('ProductCategory');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'home';

    // get product categories
    view.on('init', function(next) {
        ProductCategory.model.find()
            .sort('category')
            .exec(function(err, categories) {
                if(err) {
                    throw new err;
                }

                locals.product_categories = categories;
                next();
            })
    });

    // Render the view
    view.render('index');
};
