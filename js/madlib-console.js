const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Airbnb', 'SpaceX'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Didi', 'Alibaba'];
let madlibFavs=[];
let random1=0;
let random2=0;
let getRandom = (pool) => Math.floor((Math.random() * pool.length));

let nextMadlib = function (){
    random1 = getRandom(startupX);
    random2 = getRandom(startupY);
    $("#xForY").html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}

$("#create").click(function() {
    nextMadlib();
});
nextMadlib();

$("#save").click(function() {
    madlibFavs.push([startupX[random1],startupY[random2]]);
});

$("#print").click(function() {
    $("#favorites").html('Favorites:' + madlibFavs.join( " / "));
});

$("#clear").click(function() {
    $("#favorites").html('');
    madlibFavs=[];
});

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);