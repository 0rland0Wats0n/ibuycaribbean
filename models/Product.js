var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* Product Model
* ==============
*/

var Product = new keystone.List('Product');

Product.add({
    description: { type: Types.Textarea },
    name : {
        long: { type: Types.Text, label: "Full name"},
        short: { type: Types.Text, label: "Short name" }
    },
    categories: { type: Types.Relationship, many: true, ref: "ProductCategory" },
    manufacturer: { type: Types.Relationship, ref: "Manufacturer" },
}, "Assests", {
    main_img: { type: Types.CloudinaryImage, folder: "/product/", autoCleanup: true, select: true, selectPrefix: "/product/", label: "Display Image" },
    other_imgs: { type: Types.CloudinaryImages, folder: "/product/", autoCleanup: true, select: true, selectPrefix: "/product/", label: "Other Images" }
}, "Shipping", {
    dimensions: {
        height: { type: Types.Number, label: "Height" },
        length: { type: Types.Number, label: "Length" },
        width: { type: Types.Number, label: "Width" }
    },
    weight: { type: Types.Number }
}, "Specs", {
    color: { type: Types.Text, label: "Color" }
}, "Price", {
    list_price: { type: Types.Money, format: "$0,0.00", label: "Price" },
    sale_price: { type: Types.Money, format: "$0,0.00", label: "Sale Price" },
});

Product.defaultColumns = "name.short, list_price";
Product.register();
