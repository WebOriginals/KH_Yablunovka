$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.MENU').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
    } else {
        $('.MENU').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
    }
});
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".SB-MENU").click(function () {
        var elem = this;
        var block = $(elem).closest('.SB-MENU');
        var items = $(block).find('.SUB-MENU');
        var arrow = $(block).find('.ARROW');
        $(items).toggleClass("VISIBLE");
        $(arrow).toggleClass("ARROW-TRANSFORM");
    });

}

