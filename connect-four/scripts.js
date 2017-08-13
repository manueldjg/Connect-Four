$('button.rules').click(function(){
  $(this).hide();
  $('p').show(1000);
  $('button.got').css('display', 'block').show(1000);
})

$('button.got').click(function(){
  window.location.href='game.html'
})
