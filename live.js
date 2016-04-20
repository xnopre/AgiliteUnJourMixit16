$(function () {
    
    function displayTweetsCount(list) {
        var countMap = _.map(list, function(tag){ return tag[1]; });
        var count = _.reduce(countMap, function(memo, num){ return memo + num; }, 0);
        $("#compteur").text(count+" tweets #mixit16");
    }

    function displayTagsCloud(list, subTitle) {
        
        displayTweetsCount(list);
        
        $("#subtitle").text(subTitle);
        
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
        $.getJSON( "twits.txt", function( list ) {
            displayTagsCloud(list, "Les mots");
        });
    }

    window.setInterval(reloadTwits, 15000);
    
    reloadTwits();
    
});