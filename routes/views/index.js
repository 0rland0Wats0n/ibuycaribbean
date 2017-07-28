var keystone = require('keystone');

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

    // Render the view
    view.render('index');
};
