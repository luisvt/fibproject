$(function(){
var $items = $('div.jumbotron');
$.ajax({
type:'GET', 
url:'https://api.meetup.com/Code-for-FTL/photo_albums?photo-host=public&page=20&sig_id=4886483&sig=9e2ed9ed592429eef676820f0e8287de6ef5f3c1' ,
success:function(results){
$.each(results.slice(0,1), function(i, result){
$items.css("background-image",'url('+ result.photo_sample[0].highres_link +')');

});

},
error: function(e){
    console.log(e);
}



});



});