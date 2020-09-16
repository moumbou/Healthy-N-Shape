// sign section java script

$(document).ready(function () {

    const textOnChange = $(".divMessage p").text();
    if(textOnChange.length > 1){
        $('.divMessage').slideDown("slow", function () {
            setTimeout(function () {
                $('.divMessage').slideUp("slow");
            }, 3000);
        });
    }

})

$('.SignUpOrInSection .signCard input').focusin(function (e) {

    $($(e.target).next()).next().animate({
        width: 100 + '%'
    }, 500);

    $($(e.target)).next().animate({
        top: -20 + '%'
    }, 500);
}).focusout(function (e) {

    if (!($(e.target).val().length > 0)){
        $($(e.target).next()).next().animate({
            width: 20 + '%'
        }, 500);

        $($(e.target)).next().animate({
            top: 50 + '%'
        }, 500)
    }
})

$('.SignUpOrInSection .signCard').mouseleave(function (e) {

    let totalCharacterForEachInput = 0;
    const totalInput = $($($(e.target).children("form")).children("label")).children("input");

    for (let i = 0; i < totalInput.length; i++) {
        totalCharacterForEachInput += $(totalInput[i]).val().length;
    }

    if (totalCharacterForEachInput > 0) {
        $(e.target).css({
            transform: 'scale(' + 1.05 + ')'
        })
    }

})

$('.SignUpOrInSection').click(function (e) {
    const className = $(e.target).attr('class');

    if (className === 'SignUpOrInSection') {

        const firstCardInputs = $('.SignUpOrInSection .1 form label input');
        const secondCardInputs = $('.SignUpOrInSection .2 form label input');

        let isFirstCardInputsEmpty = true, isSecondCardInputsEmpty = true;

        jQuery.map(firstCardInputs, function (input) {
            if ($(input).val().length > 0) {
                isFirstCardInputsEmpty = false;
            }
        })

        jQuery.map(secondCardInputs, function (input) {
            if ($(input).val().length > 0) {
                isSecondCardInputsEmpty = false;
            }
        })

        if(isFirstCardInputsEmpty) $('.SignUpOrInSection .1').css('transform' , 'none')
        if(isSecondCardInputsEmpty) $('.SignUpOrInSection .2').css('transform' , 'none')

    }
})

$('.SignUpOrInSection .1 form button').mouseover(function () {
    $('.SignUpOrInSection .1 h2 span').addClass('bounce')
}).mouseleave(function () {
    $('.SignUpOrInSection .1 h2 span').removeClass('bounce')
})
$('.SignUpOrInSection .2 form button').mouseover(function () {
    $('.SignUpOrInSection .2 h2 span').addClass('bounce')
}).mouseleave(function () {
    $('.SignUpOrInSection .2 h2 span').removeClass('bounce')
})

// --------------------------------------------------------------------------------------------

// calculator calories section

$('.calculatorForm input').click(function (e) {

    const firstHorizantalSpan = $(e.target).next().next().next();
    const secondHorizantalSpan = $(e.target).next().next().next().next().next();

    const firstVerticalSpan = $(e.target).next().next();
    const secondtVerticalSpan = $(e.target).next().next().next().next();

    const inputNameAttribute = $(e.target).attr('name');

    if ( inputNameAttribute === 'height' || inputNameAttribute === 'weight' || inputNameAttribute === 'age' ) {
        $(firstVerticalSpan).addClass('animationV');
        $(secondtVerticalSpan).addClass('animationV');

        setTimeout(function () {
            $(firstHorizantalSpan).addClass('animationH');
            $(secondHorizantalSpan).addClass('animationH');
        }, 700,)

        setTimeout(function () {

            $(firstVerticalSpan).addClass('opacityAnimation');
            $(secondtVerticalSpan).addClass('opacityAnimation');

            $(firstHorizantalSpan).addClass('opacityAnimation');
            $(secondHorizantalSpan).addClass('opacityAnimation');

        }, 1200)

        setTimeout(function () {

            $(firstVerticalSpan).removeClass('animationV opacityAnimation');
            $(secondtVerticalSpan).removeClass('animationV opacityAnimation');

            $(firstHorizantalSpan).removeClass('animationH opacityAnimation');
            $(secondHorizantalSpan).removeClass('animationH opacityAnimation');

        }, 2200)


    }
})

// --------------------------------------------------------------------------------------------