let input = document.getElementById('search')
let button = document.getElementById('glass')
// let button = document.getElementById('cross')

button.addEventListener('click', function () {
    input.classList.add('show')
})
// button.addEventListener('click', function () {
//     input.classList.remove('remove')
// })

// document.getElementById('cross').addEventListener('click', function () {
//     document.getElementById
// })

// $(function () {
//     $('window').on('scroll', function (){
//         var scrollSize = $(window).scrollTop()
//         //Show/Hide Bact To Top Button
//         if (scrollSize > 500) {
//             $('#backtotop').slideDown()
//         } else {
//             $('#backtotop').slideUp()
//         }
//     })
//     $('#upDwn-btn').on('click', function() {
//         $('body,html').animate({
//             scrollTop:0
//         },1000)
//     })
// })
