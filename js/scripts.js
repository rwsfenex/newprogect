function ready() {
   document.body.classList.add('active'); // После загрузки страницы добавляем на body класс
}

window.onload = ready;


function myFunction() {
    if($(window).width() < 690)
    {
        $(function() {
    $('.but-social__but-footer').removeClass('but-social__but-footer').addClass('button-text');
});

    }
    else
    {

    }
}


myFunction();


$(window).resize(function() {
    myFunction();
});
