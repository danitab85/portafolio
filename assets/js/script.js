$(document).ready(function () {
    $(document).scroll(function () {
        var component = $("#sobre-mi").offset().top;
        var altura = $(document).scrollTop();
        if (Math.round(altura) > (Math.round(component) - 200)) {
            $("#foto").animate({ left: '0' });
            $(".parrafo").slideDown();
        }

    })

    $(".sobre-mi-link").click(function () {
        $("#foto").animate({ left: '0' });
    });

    $(".sobre-mi-link").click(function () {
        $(".parrafo").slideDown();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


});

    // $('.sobre-mi-link').click(function (event) {
    //     event.preventDefault(); // because it is an anchor element
    //     $('#parrafo').animate({
    //         right: '200px'
    //     });
    //     //$('#slideMenu').toggle();
    // });
