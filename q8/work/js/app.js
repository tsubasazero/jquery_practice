$(function(){
  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();
    const pageCount = 1
    // console.log(pageCount);
    const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
      }

      console.log(settings);
    // タイトル	title	可（AND）	部分一致テキスト検索
    // 出力フォーマット	format	不可	
    // atom:ATOM形式（デフォルト）、rss: RSS形式、 json: JSON-LD形式、html:HTML形式
    // 1ページあたりの結果数	count	不可	デフォルト20
    


    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      console.log(result);
      
      $(".lists").text(result);

    //   console.log(response);
    //   displayResult = function (){
    //   $(".inner").text();
    // }
      // displayResult(result);
     
    
    })
    .fail(function (err) {
      // const box = $(err).html("検索結果が見つかりませんでした。別のキーワードで検索して下さい。");
      // err = [jqXHR, textStatus, errorThrown]
      // console.log(box);
      // $(function displayError(){
      //   $(".inner").text();
      alert('ファイルの取得に失敗しました。');
      console.log(err)
    })

     
    // });
  })

  $(".reset-btn").on("click",function(){
    $("#search-input").val("");
    $(".lists").reset();
    // $(".lists").show();
    // alert("リセット")
  })
});


// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });