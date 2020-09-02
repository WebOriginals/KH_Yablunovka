var swiper = new Swiper('.sl-head-container', {
    pagination: {
        el: '.sl-head-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function ( bulletClass, current,  total ){
            var pagination_tpl = '<span class="number-left">' + ( '0' + current ).slice( -2 ) + '</span>';
            pagination_tpl += '<span class="nimber-right">'+' / '  + ( '0' + total ).slice( -2 ) + '</span>';
            return pagination_tpl;
        },
    },
    navigation: {
        nextEl: '.sl-head-button-next',
        prevEl: '.sl-head-button-prev',
    },
});