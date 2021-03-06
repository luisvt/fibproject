$(function(){
var $trelloheader = $('#trelloheader');
var $items = $('div.jumbotron');
var $trellotask = $('#trellotasks');
var $trellobadge = $('#trellobadge')
var $ta = $('#ta');

$.ajax({
type:'GET', 
dataType:'jsonp',
crossDomain:true,
url:'https://api.meetup.com/Code-for-FTL/photo_albums?photo-host=public&page=20&sig_id=4886483&sig=9e2ed9ed592429eef676820f0e8287de6ef5f3c1',
success:function(results){


$.each(results.data.slice(0,1), function(i, result){
$items.css("background-image",'url('+ result.photo_sample[0].highres_link +')');

});

},
error: function(e){
    console.log(e);
}



});

$.ajax({
url: 'https://api.trello.com/1/boards/8TZhObPN?fields=name,desc&cards=open&card_fields=all&lists=open&list_fields=all&members=all&member_fields=all',
dataType:'json',
type:'GET',
success: function(results){



var trelloboards = results;
var trellolists = results.lists;
var trellocards = results.cards;
var trellomem = results.members;
console.log(trellomem, 'members av works')






$trelloheader.append('<span class = "badge pull-right ">'+'Tasks '+trelloboards.lists.length+'<span>');
    
$trelloheader.append(
'<h3>'+ trelloboards.name + '</h3>');





$.each(trellolists, function(b, list){





  

    
    
      var trellohtml=  '<div class="col-md-4"><div class="panel panel-default">'+
  '<div class="panel-heading"><h4>' +list['name'] +'</h4>'+( list['closed']= false ? '<div class="badge pull-right">Open</div>': '<div class="badge pull-right">Open</div>')+'</div>'



$.each(trellocards, function(i,card){
  
  $.each(trellomem, function(i, member){
   
 
   if(list.id == card.idList){
     trellohtml += '<div class="panel-body"><p><a href="'+card.shortUrl+'">'+card.name+'</a></p>'+
     (card.badges.description != true ? ' ' : '<p>'+'Description: ' + card.desc+'</p>')
      +'</div>'+'<div class="panel-body"><div class ="col-md-5">'+(member.id == card.idMembers ? '<div class="thumbnail">'+'<img src="https://trello-avatars.s3.amazonaws.com/'+ member.avatarHash +'/30.png'+'" />'+'<p>'+member.username+'</p></div></div>':"")
     +'</div>';
    
   }


});



})

  
  

trellohtml+='</div>';
$trellotask.append(trellohtml);

});


 







}
});


});