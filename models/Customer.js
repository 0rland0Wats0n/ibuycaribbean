var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* Customer Model
* ==============
*/

var Customer = new keystone.List('Customer');

Customer.add({
    user: { type: Types.Relationship, ref: 'User', index: true, initial: true, required: true },
    address: { type: Types.Location, index: true, defaults: { country: 'United States of America' } },
    phone: {
        areacode : { type: Types.Number },
        number: { type: Types.Number }
    },
    gender: { type: Types.Select, options: 'male, female' },
    dob: { type: Types.Date, default: Date.now }
});

Customer.defaultColumns = "user.name.full, user.email, gender, dob";
Customer.register();
