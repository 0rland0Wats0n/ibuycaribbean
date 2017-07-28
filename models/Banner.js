var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
* Home Banner Model
* =================
**/

var Banner = keystone.List('Banner');

Banner.add({
    name: { type: Types.Text, required: true, initial: true, index: true },
    display: { type: Types.Boolean, required: true, initial: true, default: false },
    images: { type: Types.CloudinaryImages, required: true, initial: true, folder: "/banner/", autoCleanup: true, select: true, selectPrefix: "/banner/" },
    created_on: { type: Types.Date, default: Date.now, label: "Creation Date" },
    expires_on: { type: Types.Date, label: "Expiration Date", initial: true, dependsOn: { isDefault: false }  },
    state: { type: Types.Select, options: 'draft, active, expired', default: 'draft', index: true },
    isDefault: { type: Types.Boolean, default: false, label: "Revert to this banner when others expire.", initial: true }
});

Banner.defaultColumns = "name, state, created_on, expires_on";
Banner.register();
