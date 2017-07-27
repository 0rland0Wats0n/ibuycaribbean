var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* Cart Model
* ==========
**/

var Cart = new keystone.List('Cart', {
    nocreate: true,
    noedit: true,
    map: { name: 'session' }
});

Cart.add({
    status: { type: Types.Select, options: 'active, abandonded', default: 'active', required: true },
    quantity: { type: Types.Number, default: 0 },
    total: { type: Types.Money, format: "$0,0.00" },
    products: { type: Types.Relationship, ref: 'Product', many: true },
    created_on: { type: Types.Date, default: Date.now, required: true },
    expires_on: { type: Types.Date, default: Date.now + 1, required: true },
    session: { type: Types.Text, unique: true, index: true, required: true },
    customer: { type: Types.Relationship, ref: 'Customer' }
});

Cart.defaultColumns = 'session, status, created_on, expires_on, total, quantity';
Cart.register();
