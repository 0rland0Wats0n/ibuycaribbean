var keystone = require('keystone');
var Product = keystone.list('Product');

module.exports = {

    getRecent: function(limit, cb) {
        limit = limit || 3;

        Product.model.find()
            .sort({updated_on: 1})
            .where({$and: [{quantity: { $gt: 0 }}, {expires_on: { $gte: new Date() }}]})
            .limit(limit)
            .populate('manufacturer categories')
            .exec(function(err, products) {
                if(err) {
                    throw new Error(err);
                }

                return cb(products);
            });
    }
}
