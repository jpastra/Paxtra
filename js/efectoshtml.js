$(document).ready(function(){
    $('body').css('display', 'none');
    $('body').fadeIn(3000);

    $('a.clickme').click(function(event){
      event.preventDefault();
      linkDestino = this.href;
      $('body').fadeOut(3000,redireccionarPag());
    });

    function redireccionarPag(){
      window.location = linkDestino;
    }
});


