//called when document is fully loaded
$(document).ready(function(){

    //called when mouse hovers button
    $("button").mouseenter(function(){
        alert("hi");
    });
    
    //called when mouse leaves button
    $("button").mouseleave(function(){
        alert("bye");
    });

    //called when mouse pressed over button
    $("button").mousedown(function(){
        alert("press");
    });

    //called when mouse released over button
    $("button").mouseup(function(){
        alert("release");
    });    

    //called when mouse hovers button
    $("button").hover(function(){
        alert("hover");
    },
    function(){
        alert("leave");
    });        
    
});