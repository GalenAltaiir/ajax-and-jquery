$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            type:"GET",
            url:"data.json",

            success: function(result){
                $("#demo").html(result)
            }
            
        })
    })
})