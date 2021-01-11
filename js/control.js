$(function() {
    "use strict"

    $('.title_box').click(function() {
        $(this).toggleClass('open');
        $(this).next('.list_link').toggleClass('open');
    });

    $('#slider_price').slider({
        max: 1500,
        min: 0,
        range: true,
        values: [200, 800],
        slide: function(event, ui) {
            $('input[name="minPrice"]').val(ui.values[0]);
            $('input[name="maxPrice"]').val(ui.values[1]);
        }
    });

    $('input[name="minPrice"]').val($('#slider_price').slider('values', 0));
    $('input[name="maxPrice"]').val($('#slider_price').slider('values', 1));

    $('#cart, .title_cart').click(function() {
        $('#cart_box').toggleClass('open');
    });

    $('#sign').click(function() {
        $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });

    $('#close_modal, #black_fill').click(function() {
        $('#black_fill').toggleClass('open');
        $('#modal').toggleClass('open');
    });

    $('#search_button').click(function() {
        $('#search_panel').toggleClass('open');
    });

    $('#load_more').click(function(event) {
        event.preventDefault();
        $('.list_product').append('<a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="./img/product_2.png" alt="Продукція №1"></div><h2>Светр зимовий</h2><p>Колір: Білий</p><p class="price">800 &#8372;</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="./img/product_4.png" alt="Продукція №1"></div><h2>Светр зимовий</h2><p>Колір: Зелений</p><p class="price">650 &#8372;</p></a><a href="#" class="product box main_flex__nowrap flex__jcontent_center flex__align-items_center"><div class="img_product"><img src="./img/product_7.png" alt="Продукція №1"></div><h2>Светр зимовий</h2><p>Колір: Чорний</p><p class="price">550 &#8372;</p></a>')
    });

});