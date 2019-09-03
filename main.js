function dropdownMenu() {
    // on this click, show the menu
    $('button').click(function(event) {
        $('.navbar').toggleClass('show');
        console.log('this is working.')
    }
)};


$(dropdownMenu);