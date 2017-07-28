var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* ProductCategory Model
* =====================
**/

ProductCategory = new keystone.List("ProductCategory", {
	autokey: { from: 'name', path: 'key', unique: true },
    map: { name: 'category' }
});

ProductCategory.add({
    category: { type: Types.Text, initial: true, index: true, unique: true },
    image: { type: Types.CloudinaryImage, folder: "/product_category/", autoCleanup: true, label: "Display Image", initial: true }
});

ProductCategory.defaultColumns = "category";
ProductCategory.register();
