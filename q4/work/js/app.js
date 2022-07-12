$(function(){
  $(".nav-item").on("click",function(){
    const box = $(this).index();
    $(".description li").addClass("is-hidden");
    $(".description li").eq(box).removeClass("is-hidden");
  // nav-itemにindex番号振る
  // 先に.addClassで"is-hidden"を生成
  // index番号を振ったnav-itemに紐づく".description li"の"is-hidden"を削除
  
  });
});