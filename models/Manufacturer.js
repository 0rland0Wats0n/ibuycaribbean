var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* Manufacturer Model
* ==================
**/

var Manufacturer = new keystone.List('Manufacturer');

Manufacturer.add({
    name: { type: Types.Text, initial: true },
    email: { type: Types.Email, initial: true, unique: true, index: true },
    phone: {
        areacode : { type: Types.Number },
        number: { type: Types.Number }
    },
    location: { type: Types.Location },
    products: { type: Types.Relationship, many: true, ref: "Product" }
});

Manufacturer.defaultColumns = "name, email";
Manufacturer.register();
