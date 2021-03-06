$(document).ready(function() {

    // funkcja rozwijania menu
    $("#menu-hamburger").click(function() {
        $(".nav_main").slideToggle(400, function(){
            $(this).toggleClass("nav_expanded").css('display', '');//
        });
    });

    //funkcja sprawdzająca która sekcja znajduje sie na ekranie
    function sectionInViewport(){
        var sections = $('section');
        var viewportTop = $(window).scrollTop();
        var viewportBottom = $(window).height() + viewportTop;
        var activeSection;
        var i;

        //pętla przez sekcje strony
        for(i = 0 ; i < sections.length ; i++){
            var forSection = $(sections[i]);
            var sectionTop = $(forSection).offset().top;
            var sectionBottom = sectionTop + forSection.height();

            //warunek sprawdzający która sekcja znajduje się w widoku
            if(viewportBottom > sectionTop && viewportTop < sectionBottom){
              activeSection= i;
            }
        }
        return addClassToNav(activeSection);
    }
    //    konie sectionInViewport

    //funkcja dodająca klasę do menu w zależności od pozycji z funkcji sectionInViewport
    function addClassToNav(liIndex){
        var liCollection = $('nav a');
        var liActiv = liCollection[liIndex];
        liCollection.removeClass('active');
        $(liActiv).addClass('active');
    }
    // koniec addClassToNav

    //wywoływanie funkcji sprawdzającej pozycje sekcji
    $(window).scroll(sectionInViewport);

});
// koniec document.ready

// pobieranie daty
$("#date").text((new Date()).getFullYear());



