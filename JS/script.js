// const $windowHeight = $(document).height();
//co chcesz zrobić:
/* pobrać section i po przekroczeniu wartości skrolla dodać klasę, która zmieni wartość margin-left z 1200px na auto;
jesli scroll position jest większe od odleglosci: 'sekcja from top'*/
$(document).on("scroll", function() {
    const $section = $('section');
    const $windowHeight = $(window).height();
    const $scrollPosition = $(this).scrollTop();
    const $sectionFromTop = $section.offset().top;
    const $sectionHeight = $section.height();
    console.log($section);
    console.log($windowHeight);
    console.log($scrollPosition);
    console.log($sectionFromTop);
    console.log($sectionHeight);
    //proba wykorzystania tych wszystkich constów:
    if($scrollPosition > $sectionFromTop + $sectionHeight - $windowHeight - 100) {
        $section.removeClass('active');
    } else {
        $section.addClass('active');
    };
});


    
    //ify działające:
//     if($scrollPosition > 600) {
//         $section.removeClass("active");
//     };
//     if($scrollPosition < 590) {
//         $section.addClass("active");
//     }
// });