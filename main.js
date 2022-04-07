 $("#home-link").click(function(){
        window.location.href="";
    });
    $(".element").hover(function(){
        $(this).css("color", "black");
         $(this).css("text-decoration", "underline");
    },
    function(){
        $(this).css("color", "orange");
        $(this).css("text-decoration", "none");
    });
    $("#resume").click(function(){
        window.open('https://github.com/jkedia/MyWebsite/blob/main/Juhi%20Kedia%20Resume.pdf','_blank');
    });
   $("#work-link").click(function(){
        window.location.href="";
    });
   $("#contact").click(function(){
        window.location.href="";
    });
   $("#img").click(function(){
        $(this).animate({
            opacity: 0,
            bottom: 100
        }, 1000, function(){
             $(this).animate({
            opacity: 1,
            bottom: 100
        }, 1000);
        });

   });
   $(document).ready(function() {
    $(".input_class").keyup(function(event){
        var k = $(this).val();
        console.log(k);
    });
   });
$("#remove").click(function(){
    $(".element1").css('display' , 'none');

});
$("#add").click(function(){
    $(".element1").css('display' , 'block');

});
