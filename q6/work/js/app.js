$(function(){
  $(".select-box").on("change", function(){
    const selectVal = $(this).val();
    if(selectVal === "meat"){
      $('[data-category-type="meat"]').show();
      $('[data-category-type="fish"]').hide();
      $('[data-category-type="vegetable"]').hide();
      $('[data-category-type="fruit"]').hide();
    } else if(selectVal === "fish"){
      $('[data-category-type="meat"]').hide();
      $('[data-category-type="fish"]').show();
      $('[data-category-type="vegetable"]').hide();
      $('[data-category-type="fruit"]').hide();
    } else if(selectVal === "vegetable"){
      $('[data-category-type="meat"]').hide();
      $('[data-category-type="fish"]').hide();
      $('[data-category-type="vegetable"]').show();
      $('[data-category-type="fruit"]').hide();
    } else if(selectVal === "fruit"){
    $('[data-category-type="meat"]').hide();
    $('[data-category-type="fish"]').hide();
    $('[data-category-type="vegetable"]').hide();
    $('[data-category-type="fruit"]').show();
    } else {
      $('[data-category-type="meat"]').show();
      $('[data-category-type="fish"]').show();
      $('[data-category-type="vegetable"]').show();
      $('[data-category-type="fruit"]').show();
    }
  }) 
})
