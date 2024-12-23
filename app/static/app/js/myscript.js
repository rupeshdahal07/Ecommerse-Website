$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

$('.plus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    console.log(id)
    if (!id) {
        console.log("Product ID is missing or undefined");
        return;
    }
    $.ajax({
        type: "GET",
        url: '/pluscart',
        data: {
            prod_id : id
        },
        sucess: function(data){
            console.log(data)
        }
    })
})