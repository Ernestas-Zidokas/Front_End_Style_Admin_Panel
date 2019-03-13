// $(document).ready(function() {
//     console.log('Hello jQuery');
// });

// $(function() {
//     $('.boxes').on('click', function() {
//         console.log('clicked on a box');
//     })
// })

// $(function() {
//     $('.boxes').on('click', function() {
//         $(this).addClass('active')
//     })
// })
$(function() {
    $('#burger').on('click', function() {
        $('#side-menu').toggleClass('side-menu--closed');
    })
})

$(function() {
    $('#burger').on('click', function() {
        $('#dashboard').toggleClass('section-container--moved');
    })
})
