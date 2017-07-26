var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* ProductCategory Model
* =====================
**/

ProductCategory = new keystone.List("ProductCategory");

ProductCategory.add({
    category: { Type: Types.Text }
});

ProductCategory.defaultColumns = "category";
ProductCategory.register();
