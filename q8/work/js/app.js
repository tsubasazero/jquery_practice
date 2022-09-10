$(function(){
  $(".search-btn").on("click",function(){
    const searchWord = $("#search-input").val();
    const pageCount = 1

    const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
      }
      console.log(settings);
    // タイトル	title	可（AND）	部分一致テキスト検索
    // 出力フォーマット	format	不可	
    // atom:ATOM形式（デフォルト）、rss: RSS形式、 json: JSON-LD形式、html:HTML形式
    // 1ページあたりの結果数	count	不可	デフォルト20

    // (title["title"])
    // (nameing["dc:creator"])
    // (publisher["dc:publisher"])

    $.ajax(settings).done(function (response, items) {
      const result = response['@graph'];
      console.log(result);

      
      let html = "";
      for(let i = 0; i<items.length; i++){
      html = html +  `
      <li class="lists-item">
        <div class="list-inner">
          <p>タイトル：${result[0].items[i].title}</p>
          <p>著者：${result[0].items[i]["dc:creator"]}</p>
          <p>出版社：${result[0].items[i]["dc:publisher"]}</p>
          <a target ="_blank" href="${result[0].items[i].link["@id"]}"}>書籍情報</a>
        </div>
      </li>`

      }
      // if(result.readyState == 4){
      //   if(response.status === 200){
         
      //     alert("成功")
      //   } else{
      //     $(".lists").html('<li class="lists-box">');
          $(".lists").empty().append(html);
      //     alert("通信成功の失敗")
 
      //   }
      // }

      // console.log(response);

    }).fail(function (err) {
      
      // displayError(err)
      // alert("失敗")
    });

    // $(".reset-btn").on("click",function(){
    //   $("#search-input").val("");
    //   $(".lists").reset();
    //   $(".lists").show();
    //   alert("リセット")
    // })

  });
});


// // API
// // const settings = {
// //   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
// //   "method": "GET",
// // }
// // $.ajax(settings).done(function (response) {
// //   const result = response['@graph'];
// //   displayResult(result)
// // }).fail(function (err) {
// //   displayError(err)
// // });