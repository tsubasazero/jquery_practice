$(function(){
  $(".modal_open_button").on("click",function(){
    $(".modal_win").fadeIn();
  });
  // ".modal_open_button"をクリックすると.modal_winがフェードイン
  $(".modal_close_button").on("click",function(){
    $(".modal_win").fadeOut();
  });
  // ".modal_close_button"をクリックすると.modal_winがフェードアウト
});
