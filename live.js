$(function () {
    
    function displayTagsCloud(listStr, subTitle) {
        
        $("#subtitle").text(subTitle);
        
        var list = JSON.parse(listStr);

        var max = _.max(list, function(tag){ return tag[1]; })[1];

        var options = {
            list: list,
            gridSize: Math.round(16 * $('#tags').width() / 1024),
            weightFactor: Math.ceil(70/max),
            fontFamily: 'Times, serif',
            /*color: function (word, weight) {
                return (weight === 12) ? '#f02222' : '#c09292';
            },*/
            rotateRatio: 0.5,
            //color: '#FFF',
            color: 'random-light',
            hover: window.drawBox,
            backgroundColor: '#000'
        };

        WordCloud('tags', options);
    };
    
    function reloadTwits() {
        $.get( "twits.txt", function( listStr ) {
            displayTagsCloud(listStr, "Les mots");
        });
    }

    window.setInterval(reloadTwits, 15000);
    
    reloadTwits();
    
});