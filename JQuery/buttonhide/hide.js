//called when document is fully loaded
$(document).ready(function(){
    
    //called when the button is clicked
    $("button").click(function(){
        $("p").hide();
    });
    
    //called when the button is double clicked
    $("button").dblclick(function(){
        $("p").show();
    });
    
    
});