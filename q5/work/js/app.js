$(function(){
  $(".dropdwn li").hover(function(){
  // .dropdwn liでホバーすると発火する様に設定
    $(this).find(".dropdwn_menu").stop().slideDown();
  //thisの対象.dropdwn li
  // .find(".dropdwn_menu")で子要素取得
  // .stop（）でアニメーションを停止させる
  // .slidDown（）で取得した要素のスライド表示
  },
  function(){
    $(this).find(".dropdwn_menu").stop().slideUp();
// .slidUp（）で取得した要素のスライド非表示
   
  })
})