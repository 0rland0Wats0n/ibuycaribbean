(function() {
    /**
    * Custom iBuyCaribbean JavaScript
    * ===============================
    * Ensure to place each new functionality under headings
    * that describe which part of the web app they affect.
    **/

    // Product Search
    // ==============

    var $toggle_category_list_view = $(".js-display-selected-category");

    // toggle list view
    $toggle_category_list_view.on('click', function() {
        $(".product-search-togglecategory").toggleClass('js-show-list');
        $(this).children("span.glyphicon").toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    });

    // make selection
    $category_list_options = $(".product-search-categories-list li");
    $.each($category_list_options, function(key, value1) {
        $(value1).on('click', function() {
            // change text in display
            $(".js-display-selected-category-text").text($(this).attr('data-category'));

            // toggle selected option in select
            $select_options = $(".product-search-togglecategory select option");

            $.each($select_options, function(key, value2) {
                if($(value2).attr('selected') == 'selected') {
                    $(value2).attr('selected', null);
                }

                if($(value2).val() == $(value1).attr('data-category')) {
                    $(value2).attr('selected', 'selected');
                }

                $(".product-search-togglecategory").removeClass('js-show-list');
            });
        });
    });

    // close list when click outside list

})();
