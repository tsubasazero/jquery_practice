// 作業項目が10個あります。
// どうするのかは問題ごとのタイトルとサンプルを見ながら作業してください。
// Q1-3
// フェードアウトする時間は3秒でお願いします。
// Q1-6
// アニメーションの動作内容ですがmargin-top: 100とmargin-left: 100を指定し、2秒かけて動くよう
// にしてください。
// Q1-9
// 対象の要素のindex番号を取得する処理を作成するとできます。

$(function(){
  const boxCss ={"width": "300px","padding": "50px","font-size": "20px"}
// 同じサイズに変わるCSSを変数宣言

  $("#q1").css("color", "green");
  // 開くとq１が緑色になっている
  $("#q2").on("click", function(){
    $(this).css("background","pink");
    // クリックするとq２の枠の中がピンクになる
  });
  $("#q3").on("click",function(){
    $(this).fadeOut(3000);
    // クリックするとq３が３秒かけてフェードアウトする
  })
  $("#q4").on("click" , function(){
    $(this).css(boxCss);
     // クリックするとq４の枠と文字が大きくなる

  })

  $(document).on("click", "#q5", function(){
    $(this).before("DOMの前")
    $(this).append("DOMの前")
    $(this).prepend("DOMの後")
    $(this).after("DOMの後")
    
  })
// クリックするとq５の枠の外と中に文字が出現する

  $("#q6").on("click",function(){
    $(this).animate({
      "margin-top":"100px",
      "margin-left":"100px",
    }, 2000);
    // クリックするとq６全体が斜め下に２秒かけて移動
  });
  $("#q7").on("click", function(){
     console.log(q7)
  // クリックするとconsole.logでq７のHTMLの要素（ノード）が表示される
  });
  $("#q8").on({
   "mouseenter": function(){
     $(this).css(boxCss)
    //  ホバーしてマウスがQ8の中にある場合大きくなる
   },
   "mouseleave": function(){
     $(this).css({
      "width": "",
      "padding": "",
      "font-size": ""
     })
    //  ホバーしてマウスがQ8の外にある場合素の大きさに戻る
   }
  });
  $("#q9 li").on("click",function(){
    const text =$(this).index(); 
    alert(text)
  })
  // q9のliにindex番号を代入しているtextがアラートを表示させる
  
  $("#q10 li").on("click", function(){
    const box = $(this).index();
    $("#q11 li").eq(box).css(boxCss)
    // q10のそれぞれにindexを変数宣言しq11をeqで
    // 取得したindexをq11で割り振ることで、要素を大きくする
    
  });

});

