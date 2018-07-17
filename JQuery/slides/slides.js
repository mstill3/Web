$(document).ready(function(){
    
    $("#sdown").click(function(){
        $("#div1").slideDown();
        $("#div2").slideDown("slow");
        $("#div3").slideDown(3000);
    });
    
    $("#sup").click(function(){
        $("#div1").slideUp();
        $("#div2").slideUp("slow");
        $("#div3").slideUp(3000);
    });
    
    $("#stoggle").click(function(){
        $("#div1").slideToggle();
        $("#div2").slideToggle("slow");
        $("#div3").slideToggle(3000);
    });
    
});