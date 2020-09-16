const modelShow = () => {
    $('.model').slideDown('slow', () => {
        $('.model').css('display', 'flex');
        $('.model form').css({display: 'flex', position: 'relative', opacity: 1}).animate({
            top: 0,
        }, 1500);
    });
};

$('.model form i').click(() => {
   $('.model form').animate({
       opacity: 0
   }, 1000, () => {
       $('.model').slideUp('slow');
       $('.model form').css({display: 'none', position: 'abolute', top: '-100%'});
   })
});