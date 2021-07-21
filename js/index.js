$(document).ready(function (){

    let $btn = $('.project-area .button-group button');

    $btn.click(function (e){
        $('.project-area .button-group button').removeClass('active')
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        console.log(selector)
        $(".project-area .grid").isotope({
            filter:selector
        });
        return false;
    });

    $('.project-area .button-group #btn1').trigger('click');

});