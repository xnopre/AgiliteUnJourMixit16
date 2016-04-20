$(function () {
    
    function displayTags(list) {
        
        var content = "";
        
        list.forEach(function(tag) {
            content += tag[0] + "<br/>";
        })

        $("#tags").html(content);
    };
    
    function loadTwits() {
        $.getJSON( "twits.txt", function( list ) {
            displayTags(list);
        });
    }

    loadTwits();
    
});