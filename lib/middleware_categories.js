var keystone = require('keystone');

var ProductCategory = keystone.list('ProductCategory').model;

exports.getProductCategories = function(req, res, next) {
    ProductCategory.find()
        .sort('category')
        .exec(function(err, categories) {
            if(err) {
                throw new Error(err);
            }

            res.locals.product_categories = categories;
            return next();
        });
}
