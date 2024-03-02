//Navbar//

$(document).ready(function() {
    $('#menu-btn').click(function(){
        $('nav .navigation ul').addClass('active');
    });

    $('#menu-close').click(function(){
        $('nav .navigation ul').removeClass('active');
    });
});

//Scrolling animation//

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

//Carousel slider

$(document).ready(function(){
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = $(".slide");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // Manual navigation
    $(".prev").click(function(){
        slideIndex -= 2;
        showSlides();
    });

    $(".next").click(function(){
        showSlides();
    });
});