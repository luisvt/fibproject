$(function(){
var $items = $('div.jumbotron');
$.ajax({
type:'GET', 
dataType:'jsonp',
crossDomain:true,
url:'https://api.meetup.com/Code-for-FTL/photo_albums?photo-host=public&page=20&sig_id=4886483&sig=9e2ed9ed592429eef676820f0e8287de6ef5f3c1',
success:function(results){


$.each(results.data.slice(0,1), function(i, result){
    console.log(result.data);
$items.css("background-image",'url('+ result.photo_sample[0].highres_link +')');

});

},
error: function(e){
    console.log(e);
}



});



});