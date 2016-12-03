/**
 * Created by john on 02/12/2016.
 */
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});


$(document).ready(function(){
    $(".dropdown").click(function(){
        $("#oneD").fadeIn();
        $("#TwoD").fadeIn("slow");
        $("#ThreeD").fadeIn(3000);
    });
});