
const hidenNav = () => {
    const hidenDiv = $('.toggleHidenDiv').css('display');

    if(hidenDiv === 'block') {

        const styleShow = {
            animation: 'resetBar2 ease-in-out 0.5s',
            transform: 'rotate(0) translateX(0)'
        }
        const styleShow2 = {
            animation: 'resetBar3 ease-in-out 0.5s',
            transform: 'rotate(0) translateX(0)'
        }

        $('.navBarToggle .bar:nth-of-type(2)').css(styleShow);
        $('.navBarToggle .bar:nth-of-type(3)').css(styleShow2);
        $('.navBarToggle .bar:nth-of-type(1)').show('slow');
        $('.toggleHidenDiv').slideUp('slow');

    } else {

        const styleHide = {
            animation: 'bar2 ease-in-out 0.5s',
        transform: 'rotate(45deg) translateX(50%)'
        }
        const styleHide2 = {
            animation: 'bar3 ease-in-out 0.5s',
            transform: 'rotate(-45deg) translateX(50%)'
        }

        $('.toggleHidenDiv').slideDown('slow');
        $('.navBarToggle .bar:nth-of-type(1)').hide('fast', () => {
            $('.navBarToggle .bar:nth-of-type(2)').css(styleHide);
            $('.navBarToggle .bar:nth-of-type(3)').css(styleHide2);
        });

    }
}